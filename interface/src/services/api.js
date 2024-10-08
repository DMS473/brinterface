import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/',
  // baseURL: 'http://192.168.252.185:3000/api',
});

const api2 = axios.create({
  baseURL: '',
  // baseURL: 'http://192.168.252.185:3000/api',
});


export const getMyBookings = async () => {
  try {
    // console.log(token);
    const response = await api.get(`/portals`);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch user profile');
  }
};

export const getUser = async (bacteryName) => {
  try {
    // console.log(token);
    const response = await api2.get(`https://api.gbif.org/v1/species/match?name=${bacteryName}`);
    // console.log("data"+response.data.species);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch user profile');
  }
};
















export const login = (credentials) => api.post('/auth/login', credentials);
export const register = (data) => api.post('/auth/register', data);
// export const getUser = () => api.get(`/users/profile`,);
// export const getUsers = () => api.get('/users');
export const getRooms = () => api.get('/rooms');
export const getRoom = (id) => api.get(`/rooms/${id}`);
export const getTimeSlots = () => api.get('/timeslots');
export const getRoomTimeSlotsAll = () => api.get('/roomtimeslots/all');
export const getRoomTimeSlots = async (start_time, end_time, room) => {
  try {
    // console.log(start_time);
    // console.log(end_time);
    const response = await api.get(`/roomtimeslots?start_time=${start_time}&end_time=${end_time}&room=${room}`);
    // console.log("respon"+response.data.rows);
    return response.data.rows;
  } catch (error) {
    throw new Error('Failed to fetch room timeslots');
  }
}
export const createReservation = (data) => api.post('/reservations', data);
export const getReservations = () => api.get('/reservations');

export const getUsers = async (token) => {
  try {
    const response = await api.get(`/users`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch user profile');
  }
};



export const deleteUser = async (token, userId) => {
  try {
    const response = await api.delete(`/users/${userId}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error('Error deleting room:', error);
    throw error;
  }
};

export const addRoom = async (token, roomData) => {
  try {
    const response = await api.post(`/rooms`, { data: roomData }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error adding room:', error);
    throw error;
  }
};

export const updateRoom = async (token, roomData) => {
  try {
    const response = await api.put(`/rooms/${roomData.room_id}`, { data: roomData }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error('Error updating room:', error);
    throw error;
  }
};

export const deleteRoom = async (token, roomId) => {
  try {
    const response = await api.delete(`/rooms/${roomId}`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    console.error('Error deleting room:', error);
    throw error;
  }
};


export const addTimeSlot = async (token, roomData) => {
  try {
    // console.log(token, roomData);
    const response = await api.post(`/timeslots`, { data: roomData }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    // console.error('Error adding room:', error);
    // throw error;
    console.log(error)
  }
};


export const addRoomTimeSlot = async (token, roomData) => {
  try {
    // console.log(token, roomData);
    const response = await api.post(`/roomtimeslots`, { data: roomData }, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
  } catch (error) {
    // console.error('Error adding room:', error);
    // throw error;
    console.log(error)
  }
};



export default api;
