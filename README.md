# Weather Forecast Application
Desktop
![demo](/public/demoDesktop.png)
Mobile

![demo](/public/demoMobile.png)

## Descripción

Este proyecto es una aplicación de previsión meteorológica desarrollada con React. Utiliza la API de OpenWeatherMap para obtener datos meteorológicos actuales y previsiones a cinco días para cualquier ciudad del mundo. Los usuarios pueden buscar ciudades, cambiar entre unidades de temperatura (Celsius y Fahrenheit), y ver detalles como humedad, presión del aire, velocidad y dirección del viento, y visibilidad. Design fue extraído de **[Figma](https://www.figma.com/design/5X3Ao3gEqZPqqKctP7riDF/weather-app?node-id=0-1&node-type=CANVAS&t=fNnDPDnBYsCF3DyT-0)**

## Características

- **Búsqueda de ciudades:** Permite a los usuarios buscar el clima actual y la previsión para cualquier ciudad.
- **Ubicación del usuario:** Utiliza la geolocalización para obtener el clima de la ubicación actual del usuario.
- **Cambiar unidades de temperatura:** Los usuarios pueden alternar entre Celsius y Fahrenheit.
- **Previsión a cinco días:** Muestra la previsión meteorológica para los próximos cinco días, incluyendo temperaturas mínimas y máximas, y iconos de estado del clima.
- **Detalles del clima:** Muestra detalles adicionales como humedad, presión del aire, velocidad y dirección del viento, y visibilidad.

## Instalación

Sigue estos pasos para ejecutar el proyecto localmente:

1. **Clona el repositorio:**
    ```bash
    git clone https://github.com/devHyrum/weather-application.git
    cd weather-application
    ```

2. **Instala las dependencias:**
    ```bash
    npm install
    ```

3. **Obtén una clave API de OpenWeatherMap:**
    - Regístrate en [OpenWeatherMap](https://home.openweathermap.org/users/sign_up) y obtén una clave API gratuita.

4. **Configura la clave API:**
    - Crea un archivo `.env` en la raíz del proyecto y añade tu clave API:
      ```plaintext
      REACT_APP_API_KEY=tu_clave_api
      ```

5. **Inicia la aplicación:**
    ```bash
    npm start
    ```

6. **Visita la aplicación en tu navegador:**
    ```plaintext
    http://localhost:3000
    ```

## Estructura del Proyecto
```plaintext
weather-application/
├── src/
│ ├── assets/
│ │ └── icons/
│ ├── components/
│ │ ├── Forecast.jsx
│ │ ├── ForecastCard.jsx
│ │ ├── SearchModal.jsx
│ │ ├── TemperatureToggle.jsx
│ │ ├── WeatherCard.jsx
│ │ └── WeatherDetails.jsx
│ ├── hooks/
│ │ ├── useFetchForecastData.js
│ │ └── useFetchWeatherData.js
│ ├── App.jsx
│ ├── index.css
│ └── index.js
├── package.json
└── README.md
```
## Uso

1. **Buscar una ciudad:**
    - Haz clic en el botón "Search for places" y escribe el nombre de la ciudad.
2. **Obtener clima de la ubicación actual:**
    - Haz clic en el botón con el icono de ubicación.
3. **Cambiar unidades de temperatura:**
    - Haz clic en los botones °C o °F para alternar entre Celsius y Fahrenheit.

## Tecnologías Utilizadas

- React
- Tailwind CSS
- OpenWeatherMap API
- Figma

## Contribuciones

Las contribuciones son bienvenidas. Si deseas contribuir, por favor, haz un fork del repositorio y envía un pull request.
