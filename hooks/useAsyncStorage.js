import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useAsyncStorage = (key, initialValue) => {
  const [value, setValue] = useState([]);
  const [mounted, setMounted] = useState(false);

  const setItem = async value => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
      setValue(value);
    } catch (error) {
      console.log(error);
    }
  };

  const getItem = async (key, initialValue) => {
    if (mounted) {
      try {
        const item = await AsyncStorage.getItem(key);
        const value = item ? JSON.parse(item) : initialValue;
        setValue(value);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    setMounted(true);
    getItem(key, initialValue);
    return () => setMounted(false);
  }, [key, initialValue, mounted]);

  return [value, setItem];
};
