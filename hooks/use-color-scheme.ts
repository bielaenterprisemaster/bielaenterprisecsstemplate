import { useColorScheme as useRNColorScheme } from 'react-native';

/**
 * 'light' or 'dark'. React Native 0.86 (Expo SDK 57) added 'unspecified' to
 * ColorSchemeName; the theme only has light and dark, so anything else is light.
 */
export function useColorScheme(): 'light' | 'dark' {
  return useRNColorScheme() === 'dark' ? 'dark' : 'light';
}
