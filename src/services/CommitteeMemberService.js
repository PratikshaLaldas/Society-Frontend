import axios from 'axios';

const COMMITTEE_MEMBER_API_BASE_URL = 'http://localhost:8083/committee-member';

const headers = {
  "Content-Type": "application/json",
};

class CommitteeMemberService {

  updateCommitteeMember(loggedIn, aId,committeeMemberDTO) {
    const url=`${COMMITTEE_MEMBER_API_BASE_URL}/update_profile/${aId}?key=${loggedIn}`;
    return axios.put(url, committeeMemberDTO, { headers });  
}

  getMyProfile(urlWithPrivateKey) {
    return axios.get(urlWithPrivateKey);
  }

   // Complaints
   getAllComplaintsOfAllMember(urlWithPrivateKey) {
    return axios.get(urlWithPrivateKey);
  }

  addComplaintReply(loggedIn,cid, complaintReplyDTO) {

    const url = `${COMMITTEE_MEMBER_API_BASE_URL}/add_complaint_reply/${cid}?key=${loggedIn}`;
    return axios.post(url, complaintReplyDTO, { headers });
  }

  getAllComplaintReplies(urlWithPrivateKey) {
    return axios.get(urlWithPrivateKey);
  }

  getComplaintReplyById(urlWithPrivateKey, replyId) {
    return axios.get(urlWithPrivateKey, replyId);
}

  updateComplaintReply(loggedIn,replyId, updatedReply) {
   
    const url = `${COMMITTEE_MEMBER_API_BASE_URL}/update_complaint_reply/${replyId}?key=${loggedIn}`;
    return axios.put(url, updatedReply, { headers });
}

  deleteComplaintReply(urlWithPrivateKey,replyId) {
    return axios.delete(urlWithPrivateKey, replyId);
  }

  // Suggestions
  getAllSuggestionsOfAllMember(urlWithPrivateKey) {
    return axios.get(urlWithPrivateKey);
  }

  addSuggestionReply(loggedIn,sid, suggestionReplyDTO) {
    const url=`${COMMITTEE_MEMBER_API_BASE_URL}/add_suggestion_reply/${sid}?key=${loggedIn}`;
    return axios.post(url, suggestionReplyDTO, { headers });  
}

  getAllSuggestionReplies(urlWithPrivateKey) {
    return axios.get(urlWithPrivateKey);
  }

  getSuggestionReplyById(urlWithPrivateKey, replyId) {
    return axios.get(urlWithPrivateKey, replyId);
}
  updateSuggestionReply(loggedIn,replyId, suggestionReplyDTO) {
    const url=`${COMMITTEE_MEMBER_API_BASE_URL}/update_suggestion_reply/${replyId}?key=${loggedIn}`;
    return axios.put(url, suggestionReplyDTO, { headers });
}

  deleteSuggestionReply(urlWithPrivateKey,replyId) {
    return axios.delete(urlWithPrivateKey,replyId);
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
    const url=`${COMMITTEE_MEMBER_API_BASE_URL}/update_event/${eventId}?key=${loggedIn}`;
    return axios.put(url, eventDTO, { headers });
  }

  deleteEvent(urlWithPrivateKey,eventId) {
    return axios.delete(urlWithPrivateKey,eventId);
  }

  viewScheduledEvents(urlWithPrivateKey) {
    return axios.get(urlWithPrivateKey);
  }

  getAllScheduledEvents(urlWithPrivateKey) {
    return axios.get(urlWithPrivateKey);
  }
 

  // Accounting

  getAllResident(urlWithPrivateKey) {
    return axios.get(urlWithPrivateKey);
  }

  makeBill(loggedIn,rId, accountDTO) {
    const url=`${COMMITTEE_MEMBER_API_BASE_URL}/make-bill/${rId}?key=${loggedIn}`;
    return axios.post(url,accountDTO, { headers });
  }

  getBillById(urlWithPrivateKey,billId){
    return axios.get(urlWithPrivateKey, billId);
  }

  updateBill(loggedIn,billId, billDTO) {
    const url=`${COMMITTEE_MEMBER_API_BASE_URL}/update-bill/${billId}?key=${loggedIn}`;
    return axios.put(url, billDTO, { headers });
  }

  deleteBill(urlWithPrivateKey,billId) {
    return axios.delete(urlWithPrivateKey, billId);
  }

  getAllBills(urlWithPrivateKey) {
    return axios.get(urlWithPrivateKey);
  }
}

export default new CommitteeMemberService();
