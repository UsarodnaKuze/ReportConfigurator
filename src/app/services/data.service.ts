import { Injectable } from '@angular/core';

@Injectable()
export class DataService {
  constructor() { }
}

export const baseData = `<config>
    <fontSize value="16"/>
    <logo value="PHN2ZyB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8ieG1sbnM6Y2M9Imh0dHA6Ly9jcmVhdGl2ZWNvbW1vbnMub3JnL25zIyJ4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMieG1sbnM6c3ZnPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyJ4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciaWQ9InN2ZzU4MDcidmVyc2lvbj0iMS4xInZpZXdCb3g9IjAgMCAxODIuNTExMDUgNzEuMTQ4ODM0ImhlaWdodD0iMTAwJSI+IDxkZWZzIGlkPSJkZWZzNTgwMSIgLz4gPG1ldGFkYXRhIGlkPSJtZXRhZGF0YTU4MDQiPiA8cmRmOlJERj4gPGNjOldvcmsgcmRmOmFib3V0PSIiPiA8ZGM6Zm9ybWF0PmltYWdlL3N2Zyt4bWw8L2RjOmZvcm1hdD4gPGRjOnR5cGUgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4gPGRjOnRpdGxlPjwvZGM6dGl0bGU+IDwvY2M6V29yaz4gPC9yZGY6UkRGPiA8L21ldGFkYXRhPiA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNy44MDIwOTYsLTYuMTI1MDgwMSkiaWQ9ImxheWVyMSI+IDxwYXRoIGlkPSJwYXRoNTUwMyJkPSJNIDIyLjU3NTY2NSw1OS4wMDc2NSBDIDIyLjM2NTU4Nyw1OS4yNTc1NDEgMjAuMjIwMzczLDU4LjE4MjU2OSAxNi44ODI1MzksNTUuNTE1NTkxIDE1LjIyNzc5Niw1NC4xOTUwNjIgMTMuMDgxNzgsNTIuMTkyNzI2IDExLjM5NjM3MSw0OS40NTMwMzIgOS41MzE5MDU4LDQ2LjM4Njk5OSA4LjEzMDU4MzUsNDIuNDIzNjA5IDcuODY0OTIxMywzNy44MTMyNTUgNy41NzM1NDgzLDMzLjA0MDM5OCA4LjI2MTU2MzIsMjcuNTY5MzMzIDEwLjY0NjkyLDIyLjI2NDk1NiBjIDJlLTYsMCAzZS02LC01ZS02IDNlLTYsLTVlLTYgMS45MzgxOTUsLTQuMjgwNDM2IDUuMTY4ODcxLC04LjIxNzMyMyA5LjQ4NDU0MiwtMTEuMDY4Mjg4IDMuNTUyNTk4LC0yLjMzMTU5MTggNy42NDU5NzgsLTMuODUxMzUyMiAxMS45NTUzNDgsLTQuNTgyMTAyMiAxLjU5MjEyMywtMC4yNzg0NjIyIDMuMjI4NzUxLC0wLjQ0NjgwMDIgNC44ODgzNiwtMC40ODIzODE3IDIuNDI4ODM4LC0wLjA1MjA3MyA0Ljg0NjcwNiwwLjE4MTQ2MzUgNy4xOTg0MzIsMC43MzAwNTQyIDQuMTc0Nzk3LDAuOTgzOTUgOC4wMTcwMywyLjgyMDI3ODkgMTEuMjU0MDExLDUuMjk2MjAxNyAzLjAwMTUxNywyLjMxMDgxMyA1LjMyMDMyNSw1LjE4NjAxNSA2Ljk5NTM3MSw4LjE5ODE3MSAxLjYwMDQyNSwyLjg2ODM3NiAyLjY2NTUyMyw1Ljg2NzA2NSAzLjI1ODA2Niw4LjgxNzg2NiAwLDJlLTYgMCwzZS02IDAsNWUtNiAwLjYzMzk3MiwzLjEzNzkwNSAwLjcyMjExMiw2LjIwNzkyNyAwLjMyMDMwOSw5LjA3NjUwMSAtMC40ODI2MjksMy4zNjUxMTggLTEuNTY3MDE1LDYuMzUyMDkgLTIuODE2MDU3LDguODMwOTMxIC0xLjM3OTc2NiwyLjc1MTAxNSAtMi45NzQ0NDksNC45NjA2ODkgLTQuNTQ4MTU5LDYuNjgwOTY0IC0xLjM4NDE4LDEuNTEyMjE1IC0yLjgxODAyMywyLjU4NTQyMyAtMy45ODM3MzUsMy4zMDU3NDMgLTIuMjQ1MTM5LDEuMzgxNDEgLTMuNjIxMzU1LDEuODQwNjM1IC0zLjc3MTcwOCwxLjYyMjg1MSAtMC4yMDA0ODMsLTAuMjkwMzk4IDAuODU1NjU5LC0xLjI0ODYxMSAyLjY5NzkyOCwtMy4wMTc3NTYgMC45MDk3NSwtMC44NzY1MDIgMi4wMzYwNTcsLTIuMDYwMjYyIDMuMDQ2OTU4LC0zLjUyNjkyIDEuMjE0MzkxLC0xLjc0ODk4MSAyLjQxNjY0NiwtMy44ODA3NzcgMy40NDI1MzMsLTYuNDY5MDQ2IDAuOTExOTAzLC0yLjMxNjQ3MyAxLjY2ODA3NCwtNS4wMTE0MTQgMS44ODc4OTksLTcuODgyMjYzIDAuMTkyNTE1LC0yLjQwODc1IC0wLjAzNDYyLC00Ljk4MjM2NCAtMC42OTE2MTcsLTcuNjM2OTE5IC0xMGUtNywtMWUtNiAtMTBlLTcsLTJlLTYgLTEwZS03LC00ZS02IC0wLjYxOTQ5MSwtMi40ODc3MzYgLTEuNjI2NDAyLC00Ljk5NjY3MyAtMy4wNTQxNzcsLTcuMzY3Njc4IC0xLjQ4OTY2OSwtMi40NjM1MDggLTMuNDQ2NjQsLTQuNzc4OTQgLTUuODYwNjM3LC02LjUzODE1NCAtMi42OTE1NDYsLTEuOTc5NjMyIC01LjkwNjI2MSwtMy40NTI4NjYgLTkuMzc2MzQ3LC00LjI1Mzk3OSAtMS44ODAwMzcsLTAuNDM5NTE1IC0zLjg1NTYyNywtMC42MTc1NDEgLTUuODc4NTQ0LC0wLjU2ODM0NCAtMS4zODIwMjgsMC4wMzM2MSAtMi43NjM1NzUsMC4xNzI3NDcgLTQuMTIyNDM1LDAuMzk2MTgzIC0zLjY5ODc4NywwLjYzMTI2MSAtNy4xNDExOTIsMS44Mzc0ODQgLTEwLjAzNTAzNiwzLjY5MjE4OCAtMy41MjY1MjcsMi4yNDE3NDEgLTYuMjY2OTUxLDUuMzgwODg5IC03Ljk0NjQxNSw4Ljc5MDI2NiAwLDAgLTEwZS03LDRlLTYgLTEwZS03LDRlLTYgLTIuMTgyNzc4LDQuNDA1ODQzIC0zLjAxNTg1OCw5LjE1MzQxNiAtMy4wMzQxMTgsMTMuMzgwMDk5IC0wLjAwNjEsMy45NTYwNTcgMC44OTUzNzgsNy40MzEyOTUgMi4yNDU2NTMsMTAuMjIzMzk0IDEuMTQ1ODQ4LDIuNDE2MjI1IDIuODg2MDc5LDQuNTAzOTQzIDQuMjA3Niw1Ljk3NDM1OSAyLjc5MDMzOSwzLjA4ODEwMyA0LjQ2ODQ0OSw0Ljc1OTQ2MSA0LjE2NDcxOSw1LjEyMDc1MyB6InN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojNzFiYTFlO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTojNzFiYTFlO3N0cm9rZS13aWR0aDowO3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIC8+IDxwYXRoIGlkPSJwYXRoNTUwOSJkPSJtIDMyLjY3MzcxNCw1NS42MDMwMDggYyAtMC4xNzMwNiwwLjE1MzUzOSAtMS44NzkxMSwtMC43Nzc2MjkgLTMuODMwNjkxLC0zLjMwMTgzIDAsMCAwLC0xMGUtNyAtMTBlLTcsLTEwZS03IC0xLjAzMDgwOSwtMS4zMzUxNjkgLTIuMTExMDY5LC0zLjIwNDc0NCAtMi42Njk0MTQsLTUuNTMwMzM2IC0wLjUwMTA2OSwtMi4xMTI4NzkgLTAuNjM0Mzc4LC00LjQ2OTI1IC0wLjI5Njg0MSwtNi45NDM1MzIgMC4wODkyNCwtMC42NDY3MjMgMC4yMjA3MDQsLTEuMjkwMDEgMC4zOTE3NjYsLTEuOTI3OTE0IDAuMzA2NjY0LC0xLjE0MzU3NSAwLjcyNzIyLC0yLjIyMDE2NCAxLjIxMjI2NiwtMy4yMTU1NDYgMC43MjkzNTcsLTEuNTA4MDczIDEuNTU4NjkzLC0yLjg3NTE0NiAyLjUxOTg3NCwtNC4wODk0MzcgMS4xOTYxNzksLTEuNTAwMTQ4IDIuNTUwMjcxLC0yLjY1NDQ3MSAzLjc1ODIyLC0zLjUxNjUzMiAwLDAgMTBlLTcsLTFlLTYgMTBlLTcsLTFlLTYgMy4yNTc1MiwtMi4zMjUxMDIgNS42MjkxMDcsLTMuMTgwMTc0IDUuODAyNjY1LC0yLjkyOTc0MSAwLjMwMTM4MSwwLjQzNDg3NCAtMS42ODM3NDUsMS45MzI1MzYgLTQuNDc4Nzc1LDQuNTUxODUzIDAsMCAtMTBlLTcsMWUtNiAtMTBlLTcsMWUtNiAtMC45OTUyMzIsMC45MzU0NDEgLTIuMTEzNzI0LDIuMDg5NjY5IC0zLjAyOTUxNywzLjQyMzY1NyAtMC43NjUwMywxLjEwMjg2NCAtMS40MzMwNTYsMi4zMzg1ODggLTIuMDcyMTkzLDMuNzM3MzMxIC0wLjM5OTA4OCwwLjg4MjUyMyAtMC43NTA2NzgsMS44MTA0MDcgLTEuMDA4NjgzLDIuNzY1ODExIC0wLjE0NDA4NSwwLjUzMzU1MyAtMC4yNTU3OTUsMS4wNjM4MTkgLTAuMzMyMzU3LDEuNTkwODQ2IC0wLjMxODQ4NCwyLjE2OTkwMiAtMC4yOTk3MDgsNC4yMDQ5OTIgMC4wMDIyLDYuMDUyNjk0IDAuMzA2NDk4LDEuOTM3ODQ1IDEuMDYwNjY0LDMuNjcxNTg3IDEuNzcyNzY0LDUuMDA0Mjg3IDAsMCAxMGUtNywxZS02IDEwZS03LDFlLTYgMS4zODE3ODksMi41OTA2MjggMi42MjczMjYsNC4wMDEzNDUgMi4yNTg3MDEsNC4zMjgzODkgeiJzdHlsZT0ib3BhY2l0eToxO2ZpbGw6IzcxYmExZTtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6IzcxYmExZTtzdHJva2Utd2lkdGg6MC45MzIzNTg0NHB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiIC8+IDxwYXRoIGlkPSJwYXRoNTUxNSJkPSJtIDQyLjQwNjUzMSw1Ny4wNzk3NDggYyAtMC4xODkxODMsLTAuMTMyMjkyIDEuMDM0ODQyLC0xLjg3NDQ0NiAyLjMwNzU5OCwtNC44MzkyMjIgMCwwIDEwZS03LC0xZS02IDEwZS03LC0xZS02IDAuNjY5OTYzLC0xLjU1NDMxIDEuMzI1OTMyLC0zLjQ4MDc0OCAxLjY3NDQzNCwtNS42ODI1NzEgMC4yNzcxNCwtMS43MzQ3MTIgMC4yOTA4NTMsLTMuNTg5NTE4IDAuMDg2NzUsLTUuNTkwMTU5IC0wLjAyMzIxLC0wLjIyMzQ5OCAtMC4wNDg2NywtMC40NDc3NzUgLTAuMDc2NTUsLTAuNjcyNjQ5IC0wLjIyOTQ0MywtMS44NTA5NDQgLTAuNjAwNTg1LC0zLjU2ODEwNCAtMS4xMjAwMTMsLTUuMTYwNzA1IC0wLjY4NjkwNiwtMi4xMTU3OTMgLTEuNjQ1OTA1LC00LjAwMTczMiAtMi41MjU4MjQsLTUuNTI0MDc3IC0xLjkwNDkyLC0zLjI5NTk4NyAtMy4zOTA0NTQsLTUuMzA3ODU3IC0zLjE5MTM2NiwtNS40NjIyMjYgMC4xMDg4NDIsLTAuMDg0MzkgMi4wMTQyNzEsMS41Mzc0MzEgNC4yNTUwMDEsNC43ODg2OTggMS4wMzk1NDIsMS41MDg1MDYgMi4xNDYxNzgsMy40MzIyMDggMi45NTUwMDQsNS42ODY3MyAwLjYwMzU5NywxLjY4OTAwNiAxLjAyOTI1MiwzLjUxNjcgMS4yNzAxNTksNS40NjgzNTkgMC4wMjkyOSwwLjIzNzI0OCAwLjA1NTUxLDAuNDczNjQ5IDAuMDc4ODQsMC43MDkwMiAwLjIxMzk2MywyLjEyMTg0IDAuMTUzMjA0LDQuMTM3OTUyIC0wLjIxMjQwNyw2LjAyNjU4NCAtMC40NjA0NzQsMi4zNTgxNDYgLTEuMjgyNiw0LjM2Mzc0OCAtMi4xMzM1Nyw1LjkyOTg1OCAwLDEwZS03IC0xZS02LDEwZS03IC0xZS02LDEwZS03IC0xLjY0NDA5MSwzLjAxOTg3NSAtMy4yOTk0ODEsNC4zNzAzMTEgLTMuMzY4MDUzLDQuMzIyMzYgeiJzdHlsZT0ib3BhY2l0eToxO2ZpbGw6IzcxYmExZTtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6IzcxYmExZTtzdHJva2Utd2lkdGg6MC45MzIzNTg0NHB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiIC8+IDxwYXRoIGlkPSJwYXRoNTUyMSJkPSJtIDM4LjY2MzE0NSwzNi4xMDk4NSBjIDAuMjg5MzA1LC0wLjA3MDE1IDEuOTcxMTI3LDIuNDA4MTk2IDIuMzczOTE2LDYuNzE1NDM4IDAsMTBlLTcgMCwxMGUtNyAwLDEwZS03IDAuMTI2MDU0LDEuNDU2Njc4IDAuMDUzNzcsMi45OTU3NjggLTAuMjA3NDg1LDQuNjE4MDg1IC0wLjEyNjQ2NiwwLjc4NTMxOSAtMC4yODkzNDUsMS41NDE5MjggLTAuNDcwNTExLDIuMjU4MTA4IDAsMCAwLDAgMCwwIC0wLjU1NTEzOSwyLjI0MTg1MyAtMS4yMTQzMjMsNC4wMjk1MSAtMi4wNjA2NSw1LjUwNjAwNSAtMTBlLTcsMCAtMTBlLTcsMCAtMTBlLTcsMTBlLTcgLTEuMTUxNTI1LDIuMDAxMTExIC0yLjQzMDU3OCwyLjYyNDcyOSAtMi42Mjk5ODEsMi40NjI5ODMgLTAuMjc2NzQ5LC0wLjIyNDQ4NiAwLjQyODUzMiwtMS4zODkyNDMgMC45NjQ0ODQsLTMuMTk5NjQ4IDAsLTFlLTYgMCwtMWUtNiAwLC0xZS02IDAuNTAyMTQ5LC0xLjYxNTEyIDAuODAzNjg4LC0yLjk4NzI3MiAxLjI4MjgzNCwtNS4zMjMwNjIgMCwwIDAsMCAwLC0xMGUtNyAwLjEzNjEwMiwtMC42ODM0ODUgMC4yNzE0OTcsLTEuMzk2NjMyIDAuMzg4MzYzLC0yLjExMzQ4MyAwLjI0Mzg2LC0xLjQ5NTgyMiAwLjM3NjM5OCwtMi44MjM0MjkgMC4zODA3NzcsLTQuMTA0MDQgMCwwIDAsMCAwLDAgMC4wNDE5OSwtMy43NzYxMjQgLTAuNTM1ODc2LC02LjY5NTcyNyAtMC4wMjE3NSwtNi44MjAzODYgeiJzdHlsZT0ib3BhY2l0eToxO2ZpbGw6IzcxYmExZTtmaWxsLW9wYWNpdHk6MTtmaWxsLXJ1bGU6ZXZlbm9kZDtzdHJva2U6IzcxYmExZTtzdHJva2Utd2lkdGg6MC45MzIzNTg0NHB4O3N0cm9rZS1saW5lY2FwOmJ1dHQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1vcGFjaXR5OjEiIC8+IDxwYXRoIGlkPSJwYXRoNTUzMSJkPSJNIDI2Ljk4Mzc2Nyw1OS40NDI1NzMgSCA0Ny40OTc1NTMic3R5bGU9Im9wYWNpdHk6MTtmaWxsOiM3MWJhMWU7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOiM3MWJhMWU7c3Ryb2tlLXdpZHRoOjMuNTQyOTYyMDc7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIC8+IDxwYXRoIGlkPSJwYXRoNTU1MCJkPSJNIDI2Ljk4Mzc2Nyw2NC41MTExMTIgSCA0Ny40OTc1NTMic3R5bGU9Im9wYWNpdHk6MTtmaWxsOiM3MWJhMWU7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOiM3MWJhMWU7c3Ryb2tlLXdpZHRoOjMuNTQyOTYyMDc7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjQ7c3Ryb2tlLWRhc2hhcnJheTpub25lO3N0cm9rZS1vcGFjaXR5OjEiIC8+IDxwYXRoIHN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojNzFiYTFlO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTojNzFiYTFlO3N0cm9rZS13aWR0aDozLjU0Mjk2MjA3O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxImQ9Ik0gMjYuOTgzNzY3LDY5LjQ3NTE1MyBIIDQ3LjQ5NzU1MyJpZD0icGF0aDU1NTIiIC8+IDxwYXRoIGlkPSJwYXRoNTU1OCJkPSJtIDMwLjU2MjU0Miw3My41NDI0MzggMTIuNDk0OTc0LDAuMDY0Mzkic3R5bGU9Im9wYWNpdHk6MTtmaWxsOiM3MWJhMWU7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOiM3MWJhMWU7c3Ryb2tlLXdpZHRoOjEuNTg1MDA5NDY7c3Ryb2tlLWxpbmVjYXA6cm91bmQ7c3Ryb2tlLWxpbmVqb2luOm1pdGVyO3N0cm9rZS1taXRlcmxpbWl0OjM1LjkwMDAwMTUzO3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiAvPiA8cGF0aCBpZD0icGF0aDU2MjAiZD0ibSAzMC41NjI1NDIsNzMuNTQyNDM4IGMgMC40NzI3OTYsMC40ODYyMzggMC45NDU1ODEsMC45NzI0NjQgMS40MzIyNDksMS4zNTUxMDEgMC40ODY2NjcsMC4zODI2MzcgMC45ODY4NCwwLjY2MTQ2MiAxLjU0MTM3LDAuODk3MzQ3IDAuNTU0NTMsMC4yMzU4ODUgMS4xNjM4MSwwLjQyOTAyOSAxLjc4MzQ3NiwwLjUzNjE4MiAwLjYxOTY2NywwLjEwNzE1MyAxLjI1MDkzNCwwLjEyODYyMyAxLjkyMzE5NCwwLjA3NzEzIDAuNjcyMjU5LC0wLjA1MTQ5IDEuNDM3NDAzLC0wLjE4NDY1MyAyLjAwMjU4MiwtMC4zMjQwODIgMC41NjUxNzgsLTAuMTM5NDI4IDAuOTU3MjQxLC0wLjI4OTgwOCAxLjM2MTc1MSwtMC40ODg1NDkgMC40MDQ1MTEsLTAuMTk4NzQgMC44NTY3NiwtMC40NjYzNTMgMS4yNjY5MzYsLTAuODA1NjE3IDAuNDEwMTc2LC0wLjMzOTI2NCAwLjc5NzczNiwtMC43NjIyMzkgMS4xODM0MTYsLTEuMTgzMTYzInN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojNzFiYTFlO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTojNzFiYTFlO3N0cm9rZS13aWR0aDoxLjY3ODI0NTE5O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiAvPiA8cGF0aCBpZD0icGF0aDU2MjQiZD0ibSAzNS4yNTM2NjQsNzUuNTgyNDI4IGMgLTAuOTA4MzEzLC0wLjE4NTEyMSAtMi4wODE4NjUsLTAuNjkwOTUgLTIuNjYyMDk0LC0xLjE0NzA4IGwgLTAuMjgwNjc2LC0wLjIyMDgyMSA0LjQ4ODkwMiwwLjAzNjM5IGMgMi40Njg4ODQsMC4wMjA5OSA0LjQ5NzA5NSwwLjA0MzA1IDQuNTA3MTMxLDAuMDUxMSAwLjA0MjI1LDAuMDM1IC0wLjgzNDU3MSwwLjU1NTY1NyAtMS4yMjUyNDcsMC43Mjg5NTcgLTEuMjY3MjY1LDAuNTYyMTY2IC0zLjUxNjAwNywwLjgxODk2NiAtNC44Mjc5NDYsMC41NTEzNTMgeiJzdHlsZT0ib3BhY2l0eToxO2ZpbGw6IzcxYmExZTtmaWxsLW9wYWNpdHk6MTtzdHJva2U6IzcxYmExZTtzdHJva2Utd2lkdGg6MC4wOTcxODgxNDtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiAvPiA8cGF0aCBpZD0icGF0aDU2MjgiZD0ibSAzMi4zMTA4MjUsNzQuMjE0NjMyIGMgMy4xMjAwOTgsMC4yNDU3MzQgNi4yMzkzNzQsMC40OTE0MDMgOS4zNTc3ODgsMC43MzcwMDQic3R5bGU9Im9wYWNpdHk6MTtmaWxsOiM3MWJhMWU7ZmlsbC1vcGFjaXR5OjE7ZmlsbC1ydWxlOmV2ZW5vZGQ7c3Ryb2tlOiM3MWJhMWU7c3Ryb2tlLXdpZHRoOjEuNDkxNzczNjE7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLW9wYWNpdHk6MSIgLz4gPHBhdGggaWQ9InBhdGg1NjMyImQ9Im0gMzMuODY4NjI5LDc1LjEzOTgzOCBjIDEuNTY1OTY2LDAuMTEzMDM3IDMuMTM5MjQ2LDAuMjI2NjAyIDQuNzA3NTQ4LDAuMzM5ODA4InN0eWxlPSJvcGFjaXR5OjE7ZmlsbDojNzFiYTFlO2ZpbGwtb3BhY2l0eToxO2ZpbGwtcnVsZTpldmVub2RkO3N0cm9rZTojNzFiYTFlO3N0cm9rZS13aWR0aDoxLjIxMjA2NTk0O3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1saW5lam9pbjptaXRlcjtzdHJva2UtbWl0ZXJsaW1pdDo0O3N0cm9rZS1kYXNoYXJyYXk6bm9uZTtzdHJva2Utb3BhY2l0eToxIiAvPiA8Zmxvd1Jvb3QgdHJhbnNmb3JtPSJzY2FsZSgwLjI2NDU4MzMzKSJzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC13ZWlnaHQ6bm9ybWFsO2ZvbnQtc2l6ZTo5NnB4O2xpbmUtaGVpZ2h0OjE1NC42MjA0NjgxNHB4O2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7bGV0dGVyLXNwYWNpbmc6MHB4O3dvcmQtc3BhY2luZzowcHg7ZmlsbDojMDAwMDAwO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDoxcHg7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSJpZD0iZmxvd1Jvb3Q2NDU1InhtbDpzcGFjZT0icHJlc2VydmUiPjxmbG93UmVnaW9uIHN0eWxlPSJmb250LXNpemU6OTZweDtsaW5lLWhlaWdodDoxNTQuNjIwNDY4MTRweCJpZD0iZmxvd1JlZ2lvbjY0NTciPjxyZWN0IHN0eWxlPSJmb250LXNpemU6OTZweDtsaW5lLWhlaWdodDoxNTQuNjIwNDY4MTRweCJ5PSI5NDUuMzc2ODMieD0iMjUuNzE0Mjg1ImhlaWdodD0iMTgwIndpZHRoPSI3NDAiaWQ9InJlY3Q2NDU5IiAvPjwvZmxvd1JlZ2lvbj48Zmxvd1BhcmEgaWQ9ImZsb3dQYXJhNjQ2MSIgLz48L2Zsb3dSb290PiAgICA8dGV4dCB0cmFuc2Zvcm09InNjYWxlKDEuMDI3NDE3NywwLjk3MzMxMzk2KSJpZD0idGV4dDY0NjUieT0iNDIuNDk2OTcxIng9IjY5LjAzNzk3OSJzdHlsZT0iZm9udC1zdHlsZTpub3JtYWw7Zm9udC12YXJpYW50Om5vcm1hbDtmb250LXdlaWdodDo2MDA7Zm9udC1zdHJldGNoOm5vcm1hbDtmb250LXNpemU6MzMuNTEzODg5MzFweDtsaW5lLWhlaWdodDo2NS44MTI4MTI4MXB4O2ZvbnQtZmFtaWx5OidTZWdvZSBVSSc7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjonU2Vnb2UgVUkgU2VtaS1Cb2xkJztmb250LXZhcmlhbnQtbGlnYXR1cmVzOm5vcm1hbDtmb250LXZhcmlhbnQtY2Fwczpub3JtYWw7Zm9udC12YXJpYW50LW51bWVyaWM6bm9ybWFsO2ZvbnQtZmVhdHVyZS1zZXR0aW5nczpub3JtYWw7dGV4dC1hbGlnbjpzdGFydDtsZXR0ZXItc3BhY2luZzowcHg7d29yZC1zcGFjaW5nOjBweDt3cml0aW5nLW1vZGU6bHItdGI7dGV4dC1hbmNob3I6c3RhcnQ7ZmlsbDojMDAzMjZhO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDoyLjYzMjUxMjMzcHg7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSJ4bWw6c3BhY2U9InByZXNlcnZlIj48dHNwYW4gc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6NjAwO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1zaXplOjMzLjUxMzg4OTMxcHg7Zm9udC1mYW1pbHk6J1NlZ29lIFVJJzstaW5rc2NhcGUtZm9udC1zcGVjaWZpY2F0aW9uOidTZWdvZSBVSSBTZW1pLUJvbGQnO2ZvbnQtdmFyaWFudC1saWdhdHVyZXM6bm9ybWFsO2ZvbnQtdmFyaWFudC1jYXBzOm5vcm1hbDtmb250LXZhcmlhbnQtbnVtZXJpYzpub3JtYWw7Zm9udC1mZWF0dXJlLXNldHRpbmdzOm5vcm1hbDt0ZXh0LWFsaWduOnN0YXJ0O3dyaXRpbmctbW9kZTpsci10Yjt0ZXh0LWFuY2hvcjpzdGFydDtmaWxsOiMwMDMyNmE7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjIuNjMyNTEyMzNweDtzdHJva2Utb3BhY2l0eToxInk9IjQyLjQ5Njk3MSJ4PSI2OS4wMzc5NzkiaWQ9InRzcGFuNjQ2MyI+RFNJPC90c3Bhbj48L3RleHQ+IDx0ZXh0IGlkPSJ0ZXh0NjQ3NyJ5PSI1Ny4wNTkyOCJ4PSI3Mi4yNTMxNjYic3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6NjAwO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1zaXplOjE0LjExMTExMDY5cHg7bGluZS1oZWlnaHQ6Ni42MTQ1ODMwMnB4O2ZvbnQtZmFtaWx5OidTZWdvZSBVSSc7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjonU2Vnb2UgVUkgU2VtaS1Cb2xkJztmb250LXZhcmlhbnQtbGlnYXR1cmVzOm5vcm1hbDtmb250LXZhcmlhbnQtY2Fwczpub3JtYWw7Zm9udC12YXJpYW50LW51bWVyaWM6bm9ybWFsO2ZvbnQtZmVhdHVyZS1zZXR0aW5nczpub3JtYWw7dGV4dC1hbGlnbjpzdGFydDtsZXR0ZXItc3BhY2luZzowcHg7d29yZC1zcGFjaW5nOjBweDt3cml0aW5nLW1vZGU6bHItdGI7dGV4dC1hbmNob3I6c3RhcnQ7ZmlsbDojNzFiYTFlO2ZpbGwtb3BhY2l0eToxO3N0cm9rZTpub25lO3N0cm9rZS13aWR0aDowLjI2NDU4MzMycHg7c3Ryb2tlLWxpbmVjYXA6YnV0dDtzdHJva2UtbGluZWpvaW46bWl0ZXI7c3Ryb2tlLW9wYWNpdHk6MSJ4bWw6c3BhY2U9InByZXNlcnZlIj48dHNwYW4gc3R5bGU9ImZvbnQtc3R5bGU6bm9ybWFsO2ZvbnQtdmFyaWFudDpub3JtYWw7Zm9udC13ZWlnaHQ6NjAwO2ZvbnQtc3RyZXRjaDpub3JtYWw7Zm9udC1zaXplOjEwLjU4MzMzMzAycHg7Zm9udC1mYW1pbHk6J1NlZ29lIFVJJzstaW5rc2NhcGUtZm9udC1zcGVjaWZpY2F0aW9uOidTZWdvZSBVSSBTZW1pLUJvbGQnO2ZvbnQtdmFyaWFudC1saWdhdHVyZXM6bm9ybWFsO2ZvbnQtdmFyaWFudC1jYXBzOm5vcm1hbDtmb250LXZhcmlhbnQtbnVtZXJpYzpub3JtYWw7Zm9udC1mZWF0dXJlLXNldHRpbmdzOm5vcm1hbDt0ZXh0LWFsaWduOnN0YXJ0O3dyaXRpbmctbW9kZTpsci10Yjt0ZXh0LWFuY2hvcjpzdGFydDtmaWxsOiM3MWJhMWU7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlLXdpZHRoOjAuMjY0NTgzMzJweCJ5PSI1Ny4wNTkyOCJ4PSI3Mi4yNTMxNjYiaWQ9InRzcGFuNjQ3NSI+RGF0YSBTY2llbmNlIEluZm9ybWF0aWNzPC90c3Bhbj48L3RleHQ+IDwvZz4gPC9zdmc+"/>
    <configuration value="{'mainContainers': ['Business layer', 'Information layer', 'Application layer', 'Technology layer'], 'sideContainers': ['Organization'], 'allContainers': {'Business layer': [{'container':'reports', 'elements': ['Business Capability Map', 'Business Processes by Capability']}, {'container':'browse', 'elements': ['business capabilities', 'business processes']} ], 'Information layer': [{'container':'reports', 'elements': ['Data Concepts by Area', 'Data Concept - Application Matrix']}, {'container':'browse', 'elements': ['subject matter areas', 'data concepts']} ], 'Application layer': [{'container':'reports', 'elements': ['Application Communication Diagram', 'Application Landscape by Domains']}, {'container':'browse', 'elements': ['application domains', 'application systems', 'applications', 'application interfaces']} ], 'Technology layer': [{'container':'reports', 'elements': []}, {'container':'browse', 'elements': ['application environments', 'platform services', 'virtual servers']} ], 'Organization': [{'container':'reports', 'elements': []}, {'container':'browse', 'elements': ['external organizations', 'persons']} ] }, 'allMenuElements': {'Application - Application Matrix' : {'type':'special', 'paramASIS':'8C8C2325-CF21-48BE-9126-61B970180F86', 'paramTOBE':'EA9F63C3-C705-463D-A2D4-0CC909F86B52'}, 'Application Communication Diagram' : {'type':'diagram', 'paramASIS':'ED81E053-4FB6-434E-B824-4F0582E05DEE', 'paramTOBE':'2B1DEDC5-10DB-4198-B3CB-15976ABAAC6F'}, 'application domains' : {'type':'browse', 'paramASIS':'1175C394-2200-4E29-AC12-45DE6A25DD7E', 'paramTOBE':'1175C394-2200-4E29-AC12-45DE6A25DD7E'}, 'application environments' : {'type':'browse', 'paramASIS':'7DB77F3D-5B0F-4E68-AFC9-750967DADAF4', 'paramTOBE':'6CF07DB7-EB1A-4316-8256-08488B2DBC42'}, 'Application Landscape by Domains' : {'type':'diagram', 'paramASIS':'D676F710-A585-4F9F-8A89-564B40245052', 'paramTOBE':'3F89FF02-84CC-4955-BEA1-738097F8B1B1'}, 'application interfaces' : {'type':'browse', 'paramASIS':'C4A0AACA-6772-47D4-9725-0C989948AD16', 'paramTOBE':'C2C395D7-9E6E-4DFF-AB0E-E1A22D8431ED'}, 'application systems' : {'type':'browse', 'paramASIS':'08EF2DCE-99C4-4C71-B5CE-73ECB6CFDE7D', 'paramTOBE':'08EF2DCE-99C4-4C71-B5CE-73ECB6CFDE7D'}, 'applications' : {'type':'browse', 'paramASIS':'B00466C3-F136-44CC-BDDF-B15A7899357C', 'paramTOBE':'858A1CF8-669E-48F8-A3C1-5901D68F4CAA'}, 'business activities' : {'type':'browse', 'paramASIS':'F1C3F27C-F0D4-4038-95F0-AED7C51F96C4', 'paramTOBE':'ABA9484A-5E9C-455D-98A7-10D8C355B3EB'}, 'business capabilities' : {'type':'browse', 'paramASIS':'6397029D-59E1-4552-BF95-FBF54F15B0E2', 'paramTOBE':'B2F7BC61-D4BF-4CCB-A7D9-A6178F81D2E0'}, 'Business Capability Map' : {'type':'diagram', 'paramASIS':'4DF1C906-2181-4772-8052-AFA7A70669FD', 'paramTOBE':'2DF9738C-86EB-45EC-AD2C-86C91BA87A23'}, 'Business Process - Data Entity Matrix' : {'type':'special', 'paramASIS':'5408DA1F-BB60-4EDA-ABC0-5E3CF09377EE', 'paramTOBE':'E9B38153-8414-479D-9DD2-6888998D0C54'}, 'Business Processes by Capability' : {'type':'diagram', 'paramASIS':'83303F12-ACBF-4CC0-96C6-A7339C83239F', 'paramTOBE':'EC0F69AB-11E8-49CF-91E7-B13EF4B421B4'}, 'business processes' : {'type':'browse', 'paramASIS':'C9DB1802-4376-432B-93A0-74590B2869C6', 'paramTOBE':'5106C7DC-BC95-4C25-B0EC-30FC69FB2460'}, 'Data Concepts by Area' : {'type':'diagram', 'paramASIS':'A52A3863-1C21-4DEF-BFDD-96AF67099B16', 'paramTOBE':'E0C87DDE-6B38-4FA1-A779-A592ECAB1204'}, 'data concepts' : {'type':'browse', 'paramASIS':'4FCA1D08-579F-4063-9187-98140A70A895', 'paramTOBE':'B62533C5-117D-4389-AF60-A41688735145'}, 'Data Concept - Application Matrix' : {'type':'special', 'paramASIS':'639D47AC-FDBB-4E4B-AB5F-F534B97611C6', 'paramTOBE':'8C9455FD-929A-41FA-9374-5789B851BAEF'}, 'Department - Person Matrix' : {'type':'special', 'paramASIS':'25C28487-10F8-48FC-818F-1D46BEBC28E0', 'paramTOBE':'2480AE9C-D7B7-4097-9A45-4837572B593E'}, 'departments' : {'type':'browse', 'paramASIS':'6F2082E2-A043-4186-9C7B-D63CB24BB915', 'paramTOBE':'1C3FB6AF-A2EA-4119-94D2-719DDF8F87AD'}, 'external organizations' : {'type':'browse', 'paramASIS':'06CD9625-29A5-439E-A347-3D684C6C48FC', 'paramTOBE':'06CD9625-29A5-439E-A347-3D684C6C48FC'}, 'subject matter areas' : {'type':'browse', 'paramASIS':'EE5D84C6-A982-4FBA-80D0-EC84A0F33058', 'paramTOBE':'EE5D84C6-A982-4FBA-80D0-EC84A0F33058'}, 'locations' : {'type':'browse', 'paramASIS':'4D7899CC-2064-4F21-9C8B-8DE345257EF8', 'paramTOBE':'4D7899CC-2064-4F21-9C8B-8DE345257EF8'}, 'network devices' : {'type':'browse', 'paramASIS':'0FCF4901-8AA2-4B51-B168-1304AD920D31', 'paramTOBE':'6CD3E11D-78AF-47C4-A7ED-0D41CA59DE40'}, 'Network Diagram' : {'type':'diagram', 'paramASIS':'9236275C-01AF-4A5A-95B4-6722A91F8F78', 'paramTOBE':'D656DFE6-6901-46CD-8633-F03DCDD5EB2B'}, 'networks' : {'type':'browse', 'paramASIS':'6D9422EA-E4E8-4F2A-9759-3A6FEC1F3C51', 'paramTOBE':'C5E3E315-9971-4114-A3B7-D67F70ED4237'}, 'Organization Chart' : {'type':'diagram', 'paramASIS':'4E965DCA-3A25-4736-A294-AA2FA4CDBDE3', 'paramTOBE':'0CC6430B-128D-49C9-91B2-AA3718E39291'}, 'Person - Role Matrix' : {'type':'special', 'paramASIS':'182E9529-051A-4B36-A32D-EFC613658B8D', 'paramTOBE':'7FB0867F-143E-4322-9EBC-9072D30D7549'}, 'persons' : {'type':'browse', 'paramASIS':'A1038978-5A60-446F-94E3-B9525B222177', 'paramTOBE':'A1038978-5A60-446F-94E3-B9525B222177'}, 'physical servers' : {'type':'browse', 'paramASIS':'AF3CCDFA-BB33-424D-BFA4-F21456BB1B0B', 'paramTOBE':'942E7823-8021-4289-940F-6158B1AE706F'}, 'platform services' : {'type':'browse', 'paramASIS':'78C2F250-170D-4E3C-8DB3-29462790BBFE', 'paramTOBE':'A535FE88-4BD6-43E0-AAC7-859B308D917F'}, 'Process - Application Matrix' : {'type':'special', 'paramASIS':'71BB0B39-04E2-4381-BCF5-021D13E1C747', 'paramTOBE':'93BEF057-B660-4842-B9DC-3672B56BD9DB'}, 'Process - Department Matrix' : {'type':'special', 'paramASIS':'C5CDF9DA-E385-44E7-9590-CCB0D424BFBD', 'paramTOBE':'E074421F-43BC-4A70-BBAA-12D0D1158925'}, 'roles' : {'type':'browse', 'paramASIS':'767208A4-EA43-4675-8B4D-FB60DF75C0E4', 'paramTOBE':'7E458F32-1FCF-484A-8A38-B6D9A7A59CDF'}, 'Service catalogue' : {'type':'diagram', 'paramASIS':'038A5BC8-E94E-4CEB-B9BE-75ACACD1ED2C', 'paramTOBE':'EE4359EC-D47F-4A1C-BBBB-823D6AE59B24'}, 'storage / backup units' : {'type':'browse', 'paramASIS':'11D38FAC-1267-4D46-A2BC-7E1C76DF8476'}, 'Technologies by Domains' : {'type':'diagram', 'paramASIS':'BDE0595A-D819-4E50-ACAA-06484D3A4E21', 'paramTOBE':'BA88071F-CD43-4D28-861F-D85E1BDB85A5'}, 'Technologies by Locations' : {'type':'diagram', 'paramASIS':'49431FF9-8F97-435E-8B08-A1B1C4BE5CD3', 'paramTOBE':'21B36B97-809A-46EF-BB3F-683E7F085B1D'}, 'technology domains' : {'type':'browse', 'paramASIS':'D5BBE66E-3421-496A-AEDD-C78414DE145B', 'paramTOBE':'D5BBE66E-3421-496A-AEDD-C78414DE145B'}, 'virtual server clusters' : {'type':'browse', 'paramASIS':'F61444B7-D1A3-45C9-8181-94CFD465B17A', 'paramTOBE':'F61444B7-D1A3-45C9-8181-94CFD465B17A'}, 'virtual servers' : {'type':'browse', 'paramASIS':'488B08A6-2656-4CDD-B1D4-40FE3EBC6B1D', 'paramTOBE':'929C1169-33D6-4AE8-B525-E6CDB5EAC0A9'} } }"/>
    <headerButtons value="[{'name':'My Systems', 'id':'75C399A5-E6C1-42A8-B96E-BB137C2D1ECE'},{'name':'AS-IS', 'id':'asis'},{'name':'Transform', 'id':'48F2F594-C490-4168-94E3-89C6EDBA6686'},{'name':'TO-BE', 'id':'tobe'}]">`