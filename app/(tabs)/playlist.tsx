
import React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet, View } from 'react-native';

export default function PlaylistScreen() {
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        html, body {
          height: 100%;
          width: 100%;
          background-color: black;
          overflow: hidden;
        }
        .container {
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: column;
          background-color: black;
        }
        .spacer {
          height: 10vh;
          background-color: black;
        }
        iframe {
          width: 100%;
          height: calc(90vh);
          border: none;
          background-color: black;
          flex: 1;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="spacer"></div>
        <!-- RCAST.NET - START EMBEDDED PLAYER --> 
        <iframe width="100%" height="100%" src="https://players.rcast.net/playlisthistory/69431" frameborder="0" scrolling="yes" allow="autoplay"></iframe> 
        <div style="overflow:hidden; height:0px; width:0px;"><a href="https://www.rcast.net" title="Internet Radio Hosting">RCAST.NET</a></div>
        <!-- RCAST.NET - END EMBEDDED PLAYER -->
      </div>
    </body>
    </html>
  `;

  console.log('Playlist screen rendered with playlist shrunk down 5%');

  return (
    <View style={styles.container}>
      <WebView
        style={styles.webview}
        originWhitelist={['*']}
        source={{ html: htmlContent }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        allowsInlineMediaPlayback={true}
        mediaPlaybackRequiresUserAction={false}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  webview: {
    flex: 1,
    backgroundColor: 'black',
  },
});
