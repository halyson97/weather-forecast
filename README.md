# ☀️ Weather Forecast
App para previsão do tempo desenvolvido com React Native.

## Features
- Acesso a localização do usuário - latitude e longitude - e exibe a cidade do mesmo
- Busca de dados utilizando API Climatempo
- Previsão do tempo dentro dos próximos 7 dias
- Offline first: O aplicativo oferece a mesma experiencia para o usuário, tanto on-line como off-line;

## Preview

![Screenshot-day](https://raw.githubusercontent.com/halyson97/weather-forecast/main/assets/screenshots/day.jpeg | width=250) ![Screenshot-night](https://raw.githubusercontent.com/halyson97/weather-forecast/main/assets/screenshots/night.jpeg | width=250)

## Plugins utilizados
A lista de plugins pode conter alguns outros não listados aqui por serem dependência direta destes abaixo:

- `@react-native-community/async-storage`
- `@react-native-community/geolocation`
- `@react-native-community/netinfo`
- `lottie-react-native`
- `react-native`
- `react-router-native`

## Bibliotecas utilizadas

- `moment.js`
- `styled-components`
- `axios`
- `redux`
- `redux-persist`
- `react-redux`


## Instalação
```bash
git clone https://github.com/halyson97/weather-forecast.git

cd weather-forecast && npm install
```

## Configuração
Antes de executar a aplicação é necessário criar o arquivo de configuração no caminho \*src/config/config.tsx\* seguindo o arquivo \*src/config/example.tsx\* como exemplo.

## Executando
Para executar o app em modo desenvolvimento, basta:

```bash
# subir servidor local
npm start

# executar no dispostivo ou emulador padrão de acordo com a plataforma
npm run android
# ou
npm run ios
```

## Build android
Pode ser buildado um release - que não depende do servidor web para obter o bundle - através do comando:

```bash
cd weather-forecast

react-native bundle --dev false --platform android --entry-file index.js --bundle-output ./android/app/src/main/assets/index.android.bundle --assets-dest ./android/app/src/main/res

cd android && ./gradlew assembleRelease
```

O arquivo será gerado em `android/app/build/outputs/apk/release/app-release.apk`.

## Build iOS
Para build do app deve-se usar o Xcode.

## 
Desenvolvido por [Halyson Rezende](https://github.com/halyson97).
