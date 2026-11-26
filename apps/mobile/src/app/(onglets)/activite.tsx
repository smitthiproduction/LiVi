import { Redirect } from 'expo-router';

/** Ancienne route « Activité », renommée « Budget » (décision 0009) : redirige les anciens liens. */
export default function Page() {
  return <Redirect href="/budget" />;
}
