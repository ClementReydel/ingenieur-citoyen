const questions = [
    {
        question: "Quelle est la meilleure pratique pour créer un mot de passe sécurisé ?",
        answers: [
            { text: "Utiliser '123456' ou 'password'", correct: false, explanation: "Ces mots de passe sont trop courants et faciles à deviner." },
            { text: "Utiliser son nom ou sa date de naissance", correct: false, explanation: "Les informations personnelles sont faciles à deviner pour les pirates." },
            { text: "Utiliser un mélange de lettres, chiffres et symboles", correct: true, explanation: "Un mot de passe sécurisé doit être long et complexe." }
        ]
    },
    {
        question: "Quel est le danger principal du phishing (emails malveillants) ?",
        answers: [
            { text: "Perdre du temps en ligne", correct: false, explanation: "Le phishing vise à voler des informations personnelles." },
            { text: "Se faire voler ses informations personnelles", correct: true, explanation: "Les pirates utilisent de faux sites pour récupérer vos données sensibles." },
            { text: "Obtenir trop de spams", correct: false, explanation: "Bien que le spam soit ennuyeux, le vrai danger est le vol de données." }
        ]
    },
    {
        question: "Que signifie HTTPS dans une URL ?",
        answers: [
            { text: "Un protocole sécurisé pour les sites web", correct: true, explanation: "Le 'S' signifie 'Secure' et indique que la connexion est chiffrée." },
            { text: "Un virus dangereux", correct: false, explanation: "HTTPS est en réalité un protocole qui protège les échanges de données." },
            { text: "Un réseau social secret", correct: false, explanation: "HTTPS n'est pas un réseau social, mais un protocole de sécurité web." }
        ]
    },
    {
        question: "Quelle est la meilleure façon de se protéger contre les virus informatiques ?",
        answers: [
            { text: "Ne jamais utiliser Internet", correct: false, explanation: "Il est possible d'utiliser Internet de manière sécurisée avec des précautions." },
            { text: "Utiliser un antivirus et faire des mises à jour régulières", correct: true, explanation: "Un antivirus et des mises à jour réduisent les risques d'infections." },
            { text: "Cliquer sur tous les liens pour voir s'ils sont dangereux", correct: false, explanation: "Cliquer sur des liens suspects peut infecter votre appareil." }
        ]
    },
    {
        question: "Quel est le moyen le plus sûr de vérifier l'authenticité d'un email suspect ?",
        answers: [
            { text: "Vérifier l'adresse de l'expéditeur et les fautes d'orthographe", correct: true, explanation: "Les emails frauduleux ont souvent des erreurs et des adresses suspectes." },
            { text: "Ouvrir toutes les pièces jointes", correct: false, explanation: "Les pièces jointes peuvent contenir des virus." },
            { text: "Répondre en donnant ses informations personnelles", correct: false, explanation: "Ne jamais donner ses informations personnelles dans un email non vérifié." }
        ]
    },
    {
        question: "Que faire si vous recevez un message vous demandant de payer une rançon pour débloquer votre ordinateur ?",
        answers: [
            { text: "Payer immédiatement pour récupérer vos fichiers", correct: false, explanation: "Payer ne garantit pas la récupération de vos fichiers et encourage les pirates." },
            { text: "Signaler l'incident aux autorités et chercher une solution", correct: true, explanation: "Il faut signaler l'attaque et essayer de restaurer les fichiers via des sauvegardes." },
            { text: "Ignorer et continuer à utiliser l'ordinateur", correct: false, explanation: "Un ransomware bloque votre système et doit être traité rapidement." }
        ]
    },
    {
        question: "Pourquoi est-il dangereux de se connecter à un Wi-Fi public sans protection ?",
        answers: [
            { text: "Car Internet est plus lent", correct: false, explanation: "Le danger n'est pas la vitesse, mais la sécurité de vos données." },
            { text: "Car un hacker peut intercepter vos données", correct: true, explanation: "Les réseaux publics ne sont pas sécurisés, et un pirate peut voler vos informations." },
            { text: "Parce que le Wi-Fi public coûte cher", correct: false, explanation: "La plupart des Wi-Fi publics sont gratuits, mais leur sécurité est faible." }
        ]
    },
    {
        question: "Quel est un bon moyen de vérifier si un site web est sécurisé ?",
        answers: [
            { text: "Il a un beau design", correct: false, explanation: "Le design n'indique pas si un site est sécurisé ou non." },
            { text: "Il utilise HTTPS et un cadenas dans la barre d'adresse", correct: true, explanation: "Un site sécurisé utilise HTTPS et affiche un cadenas." },
            { text: "Il est en première page de Google", correct: false, explanation: "Être bien classé sur Google ne signifie pas forcément que le site est sûr." }
        ]
    },
    {
        question: "Qu'est-ce qu'une attaque par force brute ?",
        answers: [
            { text: "Un virus qui efface toutes vos données", correct: false, explanation: "Une attaque par force brute consiste à essayer plusieurs mots de passe pour accéder à un compte." },
            { text: "Un pirate qui essaie des milliers de mots de passe pour accéder à un compte", correct: true, explanation: "Les hackers utilisent des scripts pour tester plusieurs combinaisons de mots de passe." },
            { text: "Une attaque qui bloque votre ordinateur", correct: false, explanation: "Ce type d'attaque vise les mots de passe, pas l’ordinateur en lui-même." }
        ]
    },
    {
        question: "Pourquoi faut-il toujours mettre à jour ses logiciels ?",
        answers: [
            { text: "Pour avoir les dernières fonctionnalités", correct: false, explanation: "Les mises à jour améliorent aussi la sécurité, pas seulement les fonctionnalités." },
            { text: "Pour corriger des failles de sécurité", correct: true, explanation: "Les mises à jour corrigent des vulnérabilités qui peuvent être exploitées par des hackers." },
            { text: "Parce que c'est obligatoire", correct: false, explanation: "Ce n'est pas obligatoire, mais fortement recommandé pour votre sécurité." }
        ]
    },
    {
        question: "Pourquoi est-il important de faire des sauvegardes de ses fichiers ?",
        answers: [
            { text: "Pour libérer de l’espace sur l’ordinateur", correct: false, explanation: "Les sauvegardes servent à protéger les fichiers contre la perte de données." },
            { text: "Pour récupérer ses fichiers en cas de panne ou d’attaque", correct: true, explanation: "Une sauvegarde permet de restaurer ses fichiers en cas de problème." },
            { text: "Pour améliorer la vitesse de l’ordinateur", correct: false, explanation: "Les sauvegardes n’ont pas d’impact direct sur la vitesse de l’ordinateur." }
        ]
    },
    {
        question: "Quelle est la principale menace des réseaux sociaux ?",
        answers: [
            { text: "La publicité ciblée", correct: false, explanation: "La publicité ciblée utilise des données, mais elle n'est pas une menace directe." },
            { text: "Le vol d’identité et l’usurpation de compte", correct: true, explanation: "Les cybercriminels peuvent voler des informations personnelles pour se faire passer pour quelqu'un d'autre." },
            { text: "Les publications qui disparaissent après 24h", correct: false, explanation: "Ce n'est pas une menace de cybersécurité, juste une fonctionnalité des réseaux sociaux." }
        ]
    },
    {
        question: "Pourquoi faut-il éviter de télécharger des logiciels depuis des sites non officiels ?",
        answers: [
            { text: "Parce qu’ils sont souvent trop chers", correct: false, explanation: "Le prix n'est pas le problème principal, mais plutôt la sécurité." },
            { text: "Parce qu’ils peuvent contenir des virus ou malwares", correct: true, explanation: "Les logiciels piratés ou téléchargés de sources non fiables peuvent contenir des virus." },
            { text: "Parce qu’ils ne fonctionnent pas", correct: false, explanation: "Ils peuvent fonctionner, mais le risque de malware est plus important." }
        ]
    },
    {
        question: "Quel est le rôle d’un pare-feu ?",
        answers: [
            { text: "Accélérer la connexion Internet", correct: false, explanation: "Le pare-feu ne joue pas sur la vitesse, mais sur la sécurité." },
            { text: "Protéger un ordinateur contre les connexions non autorisées", correct: true, explanation: "Un pare-feu bloque les tentatives d’accès non autorisées à un réseau ou un appareil." },
            { text: "Supprimer les virus", correct: false, explanation: "Le pare-feu bloque les intrusions, mais ne supprime pas les virus déjà présents." }
        ]
    },
    {
        question: "Que signifie le terme 'ransomware' ?",
        answers: [
            { text: "Un logiciel qui demande une rançon pour débloquer un appareil", correct: true, explanation: "Un ransomware chiffre les fichiers et demande une rançon pour les restaurer." },
            { text: "Un logiciel antivirus", correct: false, explanation: "Au contraire, un ransomware est un logiciel malveillant." },
            { text: "Un programme pour accélérer Internet", correct: false, explanation: "Un ransomware ne sert pas à améliorer la connexion." }
        ]
    },
    {
        question: "Pourquoi faut-il utiliser un VPN sur un réseau Wi-Fi public ?",
        answers: [
            { text: "Pour cacher son historique de navigation", correct: false, explanation: "Un VPN protège vos données, mais ne supprime pas l'historique enregistré localement." },
            { text: "Pour sécuriser les échanges de données", correct: true, explanation: "Un VPN chiffre vos données, ce qui empêche les pirates de les intercepter." },
            { text: "Pour empêcher les publicités en ligne", correct: false, explanation: "Le VPN protège votre confidentialité, mais n’empêche pas toutes les publicités." }
        ]
    },
    {
        question: "Comment reconnaître un site frauduleux ?",
        answers: [
            { text: "Il propose toujours des cadeaux gratuits", correct: false, explanation: "Un site frauduleux peut sembler normal, il faut vérifier d'autres indices." },
            { text: "Il a une URL suspecte et de nombreuses fautes d’orthographe", correct: true, explanation: "Une URL étrange et des fautes sont des signes de site frauduleux." },
            { text: "Il est bien référencé sur Google", correct: false, explanation: "Un site frauduleux peut aussi être bien positionné sur Google." }
        ]
    },
    {
        question: "Pourquoi ne faut-il pas publier trop d’informations personnelles en ligne ?",
        answers: [
            { text: "Parce que ça ralentit Internet", correct: false, explanation: "Publier des informations n’affecte pas la vitesse d’Internet." },
            { text: "Parce que cela facilite l’usurpation d’identité", correct: true, explanation: "Les pirates peuvent utiliser vos informations pour se faire passer pour vous." },
            { text: "Parce que c’est illégal", correct: false, explanation: "Partager des informations personnelles n'est pas illégal, mais risqué." }
        ]
    },
    {
        question: "Qu'est-ce que l'authentification à deux facteurs (2FA) ?",
        answers: [
            { text: "Un système qui demande deux mots de passe différents", correct: false, explanation: "La 2FA utilise deux méthodes d'authentification différentes, pas simplement deux mots de passe." },
            { text: "Un processus de sécurité qui demande deux types de vérification différents", correct: true, explanation: "La 2FA combine quelque chose que vous connaissez (mot de passe) avec quelque chose que vous possédez (téléphone, clé de sécurité) ou quelque chose que vous êtes (empreinte)." },
            { text: "Un logiciel qui protège contre les virus", correct: false, explanation: "La 2FA est une méthode d'authentification, pas un antivirus." }
        ]
    },
    {
        question: "Qu'est-ce qu'un cookie informatique ?",
        answers: [
            { text: "Un virus qui mange les données de l'ordinateur", correct: false, explanation: "Les cookies ne sont pas des virus, mais des fichiers stockant des informations sur votre navigation." },
            { text: "Un petit fichier stocké sur votre appareil pour suivre votre activité en ligne", correct: true, explanation: "Les cookies servent à mémoriser vos préférences et à vous identifier lors de vos visites sur un site." },
            { text: "Un programme qui accélère le téléchargement", correct: false, explanation: "Les cookies n'influencent pas la vitesse de téléchargement." }
        ]
    },
    {
        question: "Pourquoi est-il risqué d'utiliser le même mot de passe pour tous vos comptes ?",
        answers: [
            { text: "Car c'est plus facile à retenir", correct: false, explanation: "C'est effectivement plus facile à retenir, mais ce n'est pas un risque en soi." },
            { text: "Car si un compte est compromis, tous les autres le sont aussi", correct: true, explanation: "Si un pirate découvre votre mot de passe unique, il pourra accéder à tous vos comptes." },
            { text: "Car les sites web n'aiment pas les mots de passe répétés", correct: false, explanation: "Les sites web ne peuvent pas savoir si vous utilisez le même mot de passe ailleurs." }
        ]
    },
    {
        question: "Que peut-on faire lorsqu'on reçoit un message suspect demandant de cliquer sur un lien ?",
        answers: [
            { text: "Cliquer sur le lien pour voir si c'est vraiment dangereux", correct: false, explanation: "Cliquer sur des liens suspects est exactement ce que recherchent les cybercriminels." },
            { text: "Contacter directement l'expéditeur supposé par un autre moyen pour vérifier", correct: true, explanation: "Il est préférable de vérifier l'authenticité du message par téléphone ou via le site officiel." },
            { text: "Transférer le message à tous vos contacts pour les avertir", correct: false, explanation: "Transférer le message pourrait propager l'arnaque à d'autres personnes." }
        ]
    },
    {
        question: "Pourquoi est-il important de verrouiller son téléphone avec un code ou empreinte ?",
        answers: [
            { text: "Pour éviter que les enfants ne jouent avec", correct: false, explanation: "C'est un avantage secondaire, mais pas la raison principale de sécurité." },
            { text: "Pour protéger vos informations personnelles si votre téléphone est perdu ou volé", correct: true, explanation: "Un téléphone non verrouillé donne accès à vos emails, photos, applications bancaires et autres données sensibles." },
            { text: "Pour empêcher le téléphone de s'allumer tout seul", correct: false, explanation: "Le verrouillage n'a pas d'effet sur l'allumage accidentel du téléphone." }
        ]
    },
    {
        question: "Pourquoi ne devrait-on pas utiliser des clés USB trouvées dans la rue ?",
        answers: [
            { text: "Car elles ont souvent peu d'espace de stockage", correct: false, explanation: "La capacité de stockage n'est pas le problème de sécurité principal." },
            { text: "Car elles peuvent automatiquement installer des virus sur votre ordinateur", correct: true, explanation: "Les clés USB peuvent être piégées pour infecter votre ordinateur dès qu'elles sont branchées." },
            { text: "Car elles sont souvent de mauvaise qualité", correct: false, explanation: "La qualité n'est pas le problème, mais plutôt le risque d'infection." }
        ]
    },
    {
        question: "Pourquoi est-il important de se déconnecter de ses comptes après avoir utilisé un ordinateur partagé ou public ?",
        answers: [
            { text: "Pour économiser la batterie de l'ordinateur", correct: false, explanation: "La déconnexion n'a pas d'impact significatif sur la batterie." },
            { text: "Pour empêcher quelqu'un d'autre d'accéder à vos comptes et informations personnelles", correct: true, explanation: "Rester connecté sur un appareil partagé permet à d'autres d'accéder à vos comptes." },
            { text: "Pour accélérer l'ordinateur pour les prochains utilisateurs", correct: false, explanation: "Se déconnecter n'améliore pas significativement les performances de l'ordinateur." }
        ]
    }
];