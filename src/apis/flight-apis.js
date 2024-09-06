import axiosInstance from "./axios.js";

export const getFlightsOffers = async (type) => {
  try {
    const response = await axiosInstance.get(
      `/offers?filter={"type":"${type}"}`
    );
    // console.log("Data Received : ", response.data.data.offers);
    return response.data.data.offers;
  } catch (error) {
    throw error;
  }
};

export const fetchFlightDetails = async (
  source,
  destination,
  day,
  sort = {},
  filter = {},
  limit = 10,
  page = 1
) => {
  try {
    const resData = await axiosInstance.get(`/flight`, {
      params: {
        search: JSON.stringify({ source, destination }),
        day: day,
        sort: JSON.stringify(sort),
        filter: JSON.stringify(filter),
        limit,
        page,
      },
    });
    // console.log(`fetchFlightsDetails`, resData?.data);
    return resData?.data;
  } catch (err) {
    throw err;
  }
};

export const fetchBookedFlightDetails = async (flightId, jwtToken) => {
  try {
    const response = await axiosInstance.get(`/flight/${flightId}`, {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
