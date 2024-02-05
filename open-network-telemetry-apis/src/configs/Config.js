export const config = {
    "server": {
        "port": 8081
    },
    "participantId": "le-ps-bap-network.onest.network",
    "participantUri": "http://le-ps-bap-network.onest.network",
    "domain": "onest:learning-experiences",
    "role": "BAP",
    "telemetry": {
        "batchSize": 1,
        "syncInterval": 5,
        "retry": 3,
        "storageType": "REDIS",
        "backupFilePath": "backups",
        "redis": {
            "host": "localhost",
            "port": 6379,
            "db": 4
        },
        "network": {
            "url": "https://webhook.site/4571d2bf-2a2f-4fd9-a2e3-1af6df3458c6"
        },
        "raw": {
            "url": "https://webhook.site/70702cd1-a3c3-44bb-9b75-66b3b57e0ffa"
        }
    }
}