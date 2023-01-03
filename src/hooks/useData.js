import { useEffect, useState } from 'react';
import axios from '../api/axios';

export const getAllAlbums = () => {
  const [data, setData] = useState([]);

  const albums = async () => {
    try {
      const response = await axios.get('/albums');
      setData(response.data);
    } catch (error) {
      setErrorMessage('Something went Wrong');
    }
  };

  useEffect(() => {
    albums();
  }, []);

  return [data];
};

export const getUsers = () => {
  const [data, setData] = useState([]);
  const userId = async () => {
    try {
      const response = await axios.get('/users');
      setData(response.data);
    } catch (error) {
      setErrorMessage('Something Went Wrong');
    }
  };

  useEffect(() => {
    userId();
  }, []);

  return [data];
};
