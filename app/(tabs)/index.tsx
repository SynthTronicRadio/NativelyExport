
import { View, Dimensions, Image } from 'react-native';
import { WebView } from 'react-native-webview';

export default function NowPlayingScreen() {
  const { width, height } = Dimensions.get('window');
  
  console.log('Now Playing screen rendered with embedded radio player moved down 20%');
  console.log('Screen dimensions:', { width, height });

  // HTML content for the embedded player - full screen
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        html, body {
          width: 100%;
          height: 100%;
          background-color: transparent;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          overflow: hidden;
        }
        .container {
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: stretch;
          justify-content: stretch;
          padding: 0;
          margin: 0;
        }
        iframe {
          width: 100%;
          height: 100%;
          border: none;
          display: block;
        }
        .attribution {
          overflow: hidden;
          height: 0px;
          width: 0px;
          position: absolute;
          top: -9999px;
          left: -9999px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <!-- RCAST.NET - START EMBEDDED PLAYER -->
        <iframe width="100%" height="100%" src="https://players.rcast.net/luna/72721" frameborder="0" scrolling="no" allow="autoplay"></iframe>
        <div class="attribution"><a href="https://www.rcast.net" title="Internet Radio Hosting">RCAST.NET</a></div>
        <!-- RCAST.NET - END EMBEDDED PLAYER -->
      </div>
    </body>
    </html>
  `;

  return (
    <View style={{
      flex: 1,
      width: '100%',
      height: '100%',
      backgroundColor: '#000000',
    }}>
      <View style={{
        height: '20%',
        width: '100%',
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Image
          source={require('../../assets/images/6180a282-f91d-4f7c-b401-387aeb6a4dcf.png')}
          style={{
            width: 120,
            height: 120,
            resizeMode: 'contain',
          }}
        />
      </View>
      <WebView
        source={{ html: htmlContent }}
        style={{
          flex: 1,
          width: '100%',
          backgroundColor: 'transparent',
        }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        allowsInlineMediaPlayback={true}
        mediaPlaybackRequiresUserAction={false}
        mixedContentMode="compatibility"
        onLoad={() => console.log('Radio player loaded successfully - moved down 20%')}
        onError={(error) => console.log('Radio player error:', error)}
        onMessage={(event) => console.log('Radio player message:', event.nativeEvent.data)}
      />
    </View>
  );
}
