// NÃO SEI QUAL É A DIFERENÇA DESSAS IMPORTAÇÕES PRO COLOR SCHEME, TALVEZ
// O COLOR SCHEME SÓ MUDA A ESTILIZAÇÃO ENQUANTO AQUI DE FATO APLICA, ENTÃO
// ACREDITO QUE OS DOIS SE ATRELA

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';

// STACK É AONDE A GENTE CRIA AS ROTAS
// STATUSBAR NÃO SEI

import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

// TALVEZ SEJA PADRÃO DE ANIMAÇÃO DO ROTEAMENTO

import 'react-native-reanimated';

// LÁ NA PASTA DE HOOKS PROVAVELMENTE ELE CONFIGURA O ESQUEMA DE CORES
// PRA USAR NO THEMEPROVIDER

import { useColorScheme } from '@/hooks/use-color-scheme';

// AQUI ELE CRIA UMA ÂNCORA PRA TABS E NÃO PRECISA IMPORTAR PORQUE O
// ROUTER ESCANEIA A PASTA APP

// NO CASO DE TABS, OS PARENTESES INDICAM PRO ROUTER QUE É UM GRUPO
// DE PÁGINAS QUE COMPARTILHAM DE UM MESMO LAYOUT, NESSE CASO, TEM
// A MESMA MENU-BAR

// ANCHOR É UMA PALAVRA RESERVADA

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
     
      <Stack>
        {/* AQUI É BASICAMENTE O ROTEAMENTO, O (tabs) DIRECIONA
        PRA PASTA DE PÁGINAS QUE SEGUEM O MESMO FLUXO, COMO UM APLICATIVO
        QUE INDEPENDENTE EM QUE PARTE VOCÊ TÁ, O MENU-BAR SEMPRE VAI ESTAR ALI  */}
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        
        {/* JÁ O modal AQUI ELE CRIA UMA PÁGINA DE ROTA FORA DESSE FLUXO ORIGINAL,
        PARA ATIVIDADES ESPECÍFICAS QUE PRECISAM DO FOCO PRINCIPAL */}
        <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
      </Stack>

      <StatusBar style="auto" />

    </ThemeProvider>
  );
}