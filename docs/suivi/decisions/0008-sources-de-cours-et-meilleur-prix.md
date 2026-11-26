# 0008 — Sources de cours au choix, meilleur prix et registre des identifiants

- Date : 2026-11-26
- Statut : acceptée (les liens d'affiliation restent désactivés jusqu'à l'avis juridique)

## Contexte
Le porteur veut que l'utilisateur choisisse la source des cours (Google Finance, Yahoo Finance ou d'autres), avec par défaut « le meilleur prix », comme le mode Best Price lancé par Trade Republic en juillet 2026. La source utilisée doit apparaître sous le prix. Un registre interne doit relier chaque ISIN à ses codes chez chaque source et à ses lieux de cotation, pour comparer les prix et savoir sur quel lieu et chez quel courtier un titre est accessible. Pièce jointe : liste des places de marché et de leurs offres de données (`old/ordres/2026-11-26_0610_…`).

Constats :
- Google Finance et Yahoo Finance n'ont pas d'API officielle et réservent leurs données à un usage personnel. Les afficher sans contrat enfreindrait leurs conditions et la règle « licence d'affichage obligatoire » (`docs/reglementation/donnees-tierces-et-licences.md`).
- Depuis septembre 2026, la bande consolidée européenne (EuroCTP, agréée par l'ESMA) calcule en temps réel le meilleur prix d'achat et de vente (EBBO) des actions et ETF de l'UE à partir des lieux de négociation : c'est la source naturelle du « meilleur prix ».
- La règle d'affiliation interdisait tout lien commercial dans les écrans de marché.

## Décision
1. **Sélecteur de source** (FIC-14) : « Meilleur prix » par défaut, puis un lieu précis ou une source. Google Finance et Yahoo Finance sont proposés **sous réserve de licence** : visibles, désactivés tant qu'aucun contrat n'est signé. Toute source sans licence d'affichage reste visible et désactivée, avec sa raison ; une source qui perd sa licence retombe sur « Meilleur prix ».
2. **Meilleur prix** (FIC-12) : meilleur prix d'achat (le plus bas) et de vente (le plus haut) parmi les lieux suivis, entre cotations sous licence, de même fraîcheur et récentes ; le lieu, la source et la fraîcheur s'affichent sous le prix. **Le patrimoine reste valorisé au cours du lieu principal** du registre, pour rester stable. **LiVi n'exécute ni ne transmet aucun ordre** : aucun bouton d'achat ou de vente (rappel du porteur : l'achat dans LiVi n'est pas prévu, il demande une réglementation lourde).
3. **Lieux de cotation et courtiers** (FIC-13) : pour chaque lieu, prix, écart, devise, fraîcheur, tri par prix ou alphabétique ; courtiers qui y donnent accès d'après leur politique d'exécution publiée, avec leur mode d'exécution. Courtiers agréés seulement, ordre alphabétique.
4. **Affiliation** (choix du porteur, modifie la règle précédente) : la liste des courtiers du comparatif des lieux peut porter des liens d'affiliation, **à la même rémunération et au même format pour chaque courtier**, sans mise en avant, avec la mention « Lien commercial ». Tout ou rien par lieu : si un courtier affiché n'a pas d'accord, aucun lien n'est commercial. Le lien ouvre le courtier sans quantité ni sens d'ordre. **Désactivé** (drapeau `affiliation-courtiers`, permission `affiliation.activer` réservée à la conformité) jusqu'à l'avis juridique sur le statut d'intermédiaire (ORIAS) ; en attendant, liens simples vers les sites. Les autres écrans de marché (Marchés mondiaux, Découvrir, catalogue, LiVi IA) restent sans affiliation.
5. **Registre des identifiants** (BO-07) : par ISIN, FIGI, lieux de cotation (MIC, mnémonique, devise), lieu principal, codes chez chaque source ; imports FIRDS (ESMA), OpenFIGI et ISO 10383 ; contrôles avant publication. **Sources et courtiers** au back-office (BO-30).
6. **Code** : `@livi/market-data` (`LIEUX`, `SOURCES`, `optionsSelecteur`, `resoudreSource`, `verifierEntree`, `meilleurPrix`, `comparatifLieux`, `coursDeValorisation`, `courtiersPourLieu`), testé.
7. **Priorités** (par défaut, à confirmer) : registre au MVP avec BO-07 ; meilleur prix, lieux et courtiers, choix de la source et BO-30 en V1.5, quand au moins deux sources temps réel ou la bande consolidée seront sous licence.

## Conséquences
Catalogue (FIC-12 à FIC-14, BO-30, BO-07, PAT-03, BO-10 précisés), `docs/reglementation/` (licences, affiliation), fiche actif, back-office, skill et agent de conformité, maquettes (fiche action, lieux et courtiers, source des cours, référentiel au back-office). Aucun contrat de données n'est signé à ce jour : toutes les sources sont « à négocier » ou « sous réserve ».
