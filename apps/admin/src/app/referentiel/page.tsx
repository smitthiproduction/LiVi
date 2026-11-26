/** Référentiel d'actifs et sources de cours (BO-07, BO-30) : registre des identifiants (ISIN, FIGI, lieux de cotation, mnémoniques,
 * codes par source), lieu principal de valorisation, sources de cours et état de leur licence, courtiers et lieux d'exécution d'après
 * leur politique d'exécution, liens d'affiliation.
 * Permissions : `referentiel.modifier` pour le registre, les sources et les courtiers ; `affiliation.activer` (conformité) pour les liens
 * commerciaux, seulement après l'avis juridique versé (décision 0008). Vérifiées côté serveur ; toute écriture est journalisée dans l'audit.
 * Imports : FIRDS (ESMA, hebdomadaire et quotidien), OpenFIGI, ISO 10383 (mensuel), listes des fournisseurs sous licence.
 * Contrôles avant publication : `verifierEntree` de @livi/market-data (clé ISIN, MIC connus, lieu principal, codes non vides). */
export default function Page() {
  return (
    <section>
      <h1 className="lv-display-title">Référentiel d’actifs et sources de cours</h1>
      <p className="lv-body-secondary">Registre des identifiants par ISIN, sources de cours et licences, courtiers et lieux d’exécution, liens d’affiliation.</p>
    </section>
  );
}
