import type {ReactNode} from 'react';
import styles from './styles.module.css';

// Default rating bands and scales for vendor scoring, matching core
const BANDS = [
  {rating: 'Very Low', max: 3, className: styles.veryLow},
  {rating: 'Low', max: 5, className: styles.low},
  {rating: 'Medium', max: 11, className: styles.medium},
  {rating: 'High', max: 15, className: styles.high},
  {rating: 'Critical', max: Infinity, className: styles.critical},
];

const IMPACTS = [
  {label: 'Critical', value: 5},
  {label: 'High', value: 4},
  {label: 'Medium', value: 3},
  {label: 'Low', value: 2},
  {label: 'Very Low', value: 1},
];

const LIKELIHOODS = [
  {label: 'Very Low', value: 0.5},
  {label: 'Low', value: 1},
  {label: 'Medium', value: 2},
  {label: 'High', value: 3},
  {label: 'Very High', value: 4},
];

const bandFor = (score: number) => BANDS.find(({max}) => score <= max);

// Color-coded rating label, e.g. <RatingChip rating="High" />
export function RatingChip({rating}: {rating: string}): ReactNode {
  const band = BANDS.find((candidate) => candidate.rating === rating);
  return <span className={`${styles.chip} ${band?.className ?? styles.none}`}>{rating}</span>;
}

// Impact x likelihood matrix colored by the rating each score earns on its own
export default function VendorRiskMatrix(): ReactNode {
  return (
    <div className={styles.wrapper}>
      <table className={styles.matrix}>
        <caption className={styles.caption}>Score for one answer, colored by the default rating band it falls in</caption>
        <thead>
          <tr>
            <th scope="col">Impact / Likelihood</th>
            {LIKELIHOODS.map(({label, value}) => (
              <th key={label} scope="col">
                {label} ({value})
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {IMPACTS.map((impact) => (
            <tr key={impact.label}>
              <th scope="row">
                {impact.label} ({impact.value})
              </th>
              {LIKELIHOODS.map((likelihood) => {
                const score = impact.value * likelihood.value;
                const band = bandFor(score);
                return (
                  <td key={likelihood.label} className={band?.className}>
                    <span className={styles.score}>{score}</span>
                    <span className={styles.rating}>{band?.rating}</span>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
