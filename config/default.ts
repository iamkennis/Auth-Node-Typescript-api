export default {
	port: 1337,
	host: 'localhost',
	dbUri: 'mongodb://localhost:27017/rest-api',
	saltWorkFactor: 16,
	accessTokenTtl: '15m',
	refreshTokenTtl: '1y',
	privateKey: `-----BEGIN PRIVATE KEY-----
MIIBVQIBADANBgkqhkiG9w0BAQEFAASCAT8wggE7AgEAAkEAxlIm5U6Vt9J0WoWy
8o99+iukLWasd4qq/FY15P0osRTX3mpW/H0mNr6764wgpH9YRNxqivDITJqZvgIr
2hW1dwIDAQABAkAIl1B2CIR11RkTPs10soCbkL5o9RStjQVBLx7gj5LusMvHoAO+
lYaSgCNnThdbDCWIVrMgV96MSnQJQyWSrBtpAiEA/6vdYKRsc9hN7YwnowUycuk6
PwfBtfXHxSVFidJ5vZMCIQDGk2ofUYxmQsiklS5T3B8gSXzjAoIKTKJJwaihJPG3
DQIhAJJXRTdz5b/JJ5G4j1d4OhAb/wLk5bPJIrdtRghFOPmRAiEAiPO8WhM1AIYI
uTHF/MIwmWT1g98D7rSBrNqqQVEof7UCIHKpPVmg0w2HNqV8Vukl956/tDkKc90N
s0+3i7xm9t3/
-----END PRIVATE KEY-----`,
};