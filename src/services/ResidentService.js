import axios from 'axios';

const RESIDENT_API_BASE_URL = 'http://localhost:8083/residents';

const headers = {
  "Content-Type": "application/json", // Make sure you're sending JSON data
};

class ResidentService {
  registerResident(residentDTO) {
    return axios.post(`${RESIDENT_API_BASE_URL}/register`, residentDTO);
  }

  sendForgotPasswordEmail(email) {
    return axios.post(`${RESIDENT_API_BASE_URL}/forgot_password`, { email });
  }

  updateResident(loggedIn,rId, residentDTO) {
    
    const url = `${RESIDENT_API_BASE_URL}/update-resident-detail/${rId}/?key=${loggedIn}`;
    return axios.put(url, residentDTO , { headers });
  }

  getAllResidents(urlWithPrivateKey) {
    return axios.get(urlWithPrivateKey);
  }

  //look into this method, how key is passed in url..see if its working or not 
  getMyProfile(urlWithPrivateKey) {
    return axios.get(urlWithPrivateKey);
  }

  //complaint
  registerComplaint(urlWithPrivateKey, complaintDTO) {
    return axios.post(urlWithPrivateKey, complaintDTO);
  }

  updateComplaint(loggedIn, cid, updatedComplaint) {
    const url = `${RESIDENT_API_BASE_URL}/update_complaint/${cid}/?key=${loggedIn}`;

    return axios.put(url, updatedComplaint, { headers }); // Pass the headers
  }

  deleteComplaint(urlWithPrivateKey, cid) {
    return axios.delete(urlWithPrivateKey, cid);
  }

  getAllComplaints(urlWithPrivateKey) {
    return axios.get(urlWithPrivateKey);
  }

  getComplaintById(urlWithPrivateKey, cid) {
    return axios.get(urlWithPrivateKey, cid);
  }

  getComplaintRepliesForResident(urlWithPrivateKey) {
    return axios.get(urlWithPrivateKey);
  }

//suggestion
  registerSuggestion(urlWithPrivateKey, suggestionDTO) {
    return axios.post(urlWithPrivateKey, suggestionDTO);
  }

  updateSuggestion(loggedIn, sid, updatedSuggestion) {

    const url = `${RESIDENT_API_BASE_URL}/update_suggestion/${sid}/?key=${loggedIn}`;
    return axios.put(url,updatedSuggestion, { headers });
  }

  deleteSuggestion(urlWithPrivateKey,sid) {
    return axios.delete(urlWithPrivateKey,sid);
  }

  getAllSuggestions(urlWithPrivateKey) {
    return axios.get(urlWithPrivateKey);
  }

  getSuggestionById(urlWithPrivateKey, cid) {
    return axios.get(urlWithPrivateKey, cid);
  }

  getSuggestionRepliesForResident(urlWithPrivateKey) {
    return axios.get(urlWithPrivateKey);
  }
  
  // Event Scheduling
  checkEventAvailability(urlWithPrivateKey, eventAvailability) {
    return axios.post(urlWithPrivateKey, eventAvailability);
  }

  getBookedSlots(urlWithPrivateKey) {
    return axios.get(urlWithPrivateKey);
  }

  scheduleEvent(urlWithPrivateKey, eventDTO) {
    return axios.post(urlWithPrivateKey, eventDTO);
  }

  getEventById(urlWithPrivateKey, eventId) {
    return axios.get(urlWithPrivateKey, eventId);
  }

  updateEvent(loggedIn,eventId, eventDTO) {
    const url = `${RESIDENT_API_BASE_URL}/update_event/${eventId}/?key=${loggedIn}`;
    return axios.put(url, eventDTO, { headers });
  }

  deleteEvent(urlWithPrivateKey,eventId) {
    return axios.delete(urlWithPrivateKey, eventId);
  }

  viewScheduledEvents(urlWithPrivateKey) {
    return axios.get(urlWithPrivateKey);
  }

  viewPreviousScheduledEvents(urlWithPrivateKey){
    return axios.get(urlWithPrivateKey);
  }

  viewCommitteeScheduledEvents(urlWithPrivateKey){
    return axios.get(urlWithPrivateKey);
  }

  markEventAsPaid(loggedIn,eventId, paymentRequest) {
    const url = `${RESIDENT_API_BASE_URL}/make-event-payment/${eventId}?key=${loggedIn}`;
    return axios.post(url, paymentRequest, { headers });
  }

  // Accounting
  getMyBills(urlWithPrivateKey) {
    return axios.get(urlWithPrivateKey);
  }

  getMyPreviousBills(urlWithPrivateKey) {
    return axios.get(urlWithPrivateKey);
  }

  makeOnlinePayment(loggedIn, billNo, paymentRequest) {
    const url=`${RESIDENT_API_BASE_URL}/make-online-payment/${billNo}?key=${loggedIn}`;
    return axios.post(url, paymentRequest, { headers })
  }

}

export default new ResidentService();
