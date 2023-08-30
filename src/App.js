import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import RegisterResident from './components/RegisterResident';
import ForgotPassword from './components/ForgotPassword';
import ResidentHome from './components/ResidentHome';
import Logout from './components/Logout';
import CommitteeMemberHome from './components/CommitteeMemberHome';
import ViewCommitteeMember from './components/ViewCommitteeMember';
import Rules from './components/Rules';
import RegisterComplaint from './components/RegisterComplaint';
import ComplaintList from './components/ComplaintList';
import UpdateComplaint from './components/UpdateComplaint';
import ResidentViewComplaintReply from './components/ResidentViewComplaintReply';
import SuggestionList from './components/SuggestionList';
import UpdateSuggestion from './components/UpdateSuggestion';
import ResidentViewSuggestionReply from './components/ResidentViewSuggestionReply';
import RegisterSuggestion from './components/RegisterSuggestion';
import CommitteeGetAllComplaint from './components/CommitteeGetAllComplaint';
import CommitteeAddComplaintReply from './components/CommitteeAddComplaintReply';
import CommitteeViewAllComplaintReplies from './components/CommitteeViewAllComplaintReplies';
import CommitteeUpdateComplaintReply from './components/CommitteeUpdateComplaintReply';
import CommitteeGetAllSuggestions from './components/CommitteeGetAllSuggestions';
import CommitteeAddSuggestionReply from './components/CommitteeAddSuggestionReply';
import CommitteeViewAllSuggestionReplies from './components/CommitteeViewAllSuggestionReplies';
import CommitteeUpdateSuggestionReply from './components/CommitteeUpdateSuggestionReply';
import ResidentViewBookedSlots from './components/ResidentViewBookedSlots';
import ResidentCheckEventAvailability from './components/ResidentCheckEventAvailability';
import ResidentScheduleEvent from './components/ResidentScheduleEvent';
import ResidentViewScheduledEvent from './components/ResidentViewScheduledEvent';
import ResidentUpdateEvent from './components/ResidentUpdateEvent';
import ResidentEventPayment from './components/ResidentEventPayment';
import ResidentViewPreviousScheduledEvent from './components/ResidentViewPreviousScheduledEvent';
import ResidentViewCommitteeScheduledEvent from './components/ResidentViewCommitteeScheduledEvent';
import CommitteeCheckEventAvailability from './components/CommitteeCheckEventAvailability';
import CommitteeViewBookedSlots from './components/CommitteeViewBookedSlots';
import CommitteeScheduleEvent from './components/CommitteeScheduleEvent';
import CommitteeViewScheduledEvent from './components/CommitteeViewScheduledEvent';
import CommitteeUpdateEvent from './components/CommitteeUpdateEvent';
import CommitteeViewAllScheduledEvent from './components/CommitteeViewAllScheduledEvent';
import ResidentViewNeighbours from './components/ResidentViewNeighbours';
import ResidentViewProfile from './components/ResidentViewProfile';
import ResidentUpdateProfile from './components/ResidentUpdateProfile';
import CommitteeViewProfile from './components/CommitteeViewProfile';
import CommitteeUpdateProfile from './components/CommitteeUpdateProfile';
import CommitteeViewAllResident from './components/CommitteeViewAllResident';
import CommitteeViewAllBill from './components/CommitteeViewAllBill';
import CommitteeMakeBill from './components/CommitteeMakeBill';
import CommitteeUpdateBill from './components/CommitteeUpdateBill';
import ResidentViewBill from './components/ResidentViewBill';
import ResidentViewPreviousBill from './components/ResidentViewPreviousBill';
import ResidentBillPayment from './components/ResidentBillPayment';

import ResidentGallery from './components/ResidentGallery';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/RegisterResident" element={<RegisterResident />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/ResidentHome" element={<ResidentHome />} />
        <Route path="/ResidentViewNeighbours" element={<ResidentViewNeighbours/>}/>
        <Route path="/ViewCommitteeMember" element={<ViewCommitteeMember/>}/>
        <Route path="/Rules" element={<Rules/>}/>
        <Route path="/ResidentGallery" element={<ResidentGallery/>}/>
        <Route path='/ResidentViewProfile' element={<ResidentViewProfile/>}/>
        <Route path="/ResidentUpdateProfile" element={<ResidentUpdateProfile/>}/>

        <Route path="/RegisterComplaint" element={<RegisterComplaint/>}/>
        <Route path="/complaintList" element={<ComplaintList/>} />
        <Route path="/editComplaint/:cid" element={<UpdateComplaint />} />
        <Route path="/UpdateComplaint/:cid" element={<UpdateComplaint/>}/>
        <Route path="/ResidentViewComplaintReply" element={<ResidentViewComplaintReply/>}/>

        <Route path="/RegisterSuggestion" element={<RegisterSuggestion/>}/>
        <Route path="/suggestionList" element={<SuggestionList/>} />
        <Route path="/UpdateSuggestion/:sid" element={<UpdateSuggestion/>}/>
        <Route path="/ResidentViewSuggestionReply" element={<ResidentViewSuggestionReply/>}/>

        <Route path="/CommitteeMemberHome" element={<CommitteeMemberHome/>}/>
        <Route path="/CommitteeViewProfile" element={<CommitteeViewProfile/>}/>
        <Route path="/CommitteeUpdateProfile" element={<CommitteeUpdateProfile/>}/>

        <Route path="/CommitteeGetAllComplaint" element={<CommitteeGetAllComplaint/>}/>
        <Route path="/committeeAddComplaintReply/:cid" element={<CommitteeAddComplaintReply />}/>
        <Route path="/committeeViewAllComplaintReplies" element={<CommitteeViewAllComplaintReplies />}/>
        <Route path="/CommitteeUpdateComplaintReply/:replyId" element={<CommitteeUpdateComplaintReply />} />
    
        <Route path="/CommitteeGetAllSuggestions" element={<CommitteeGetAllSuggestions/>}/>
        <Route path="/CommitteeAddSuggestionReply/:sid" element={<CommitteeAddSuggestionReply/>}/>
        <Route path="/CommitteeViewAllSuggestionReplies" element={<CommitteeViewAllSuggestionReplies/>}/>
        <Route path="/CommitteeUpdateSuggestionReply/:replyId" element={<CommitteeUpdateSuggestionReply/>}/>

        <Route path="/ResidentCheckEventAvailability" element={<ResidentCheckEventAvailability/>}/>
        <Route path="/ResidentViewBookedSlots" element={<ResidentViewBookedSlots/>}/>
        <Route path="/ResidentScheduleEvent" element={<ResidentScheduleEvent />} />
        <Route path="/ResidentViewScheduledEvent" element={<ResidentViewScheduledEvent />} />
        <Route path="/ResidentUpdateEvent/:eventId" element={<ResidentUpdateEvent />} />
        <Route path="/ResidentEventPayment/:eventId" element={<ResidentEventPayment />} />
        <Route path="/ResidentViewPreviousScheduledEvent" element={<ResidentViewPreviousScheduledEvent />} />
        <Route path="/ResidentViewCommitteeScheduledEvent" element={<ResidentViewCommitteeScheduledEvent/>}/>

        <Route path="/ResidentViewBill" element={<ResidentViewBill/>}/>
        <Route path="/ResidentViewPreviousBill" element={<ResidentViewPreviousBill/>}/>
        <Route path="/ResidentBillPayment/:billNo" element={<ResidentBillPayment/>}/> 

        <Route path="/CommitteeCheckEventAvailability" element={<CommitteeCheckEventAvailability/>}/>
        <Route path="/CommitteeViewBookedSlots" element={<CommitteeViewBookedSlots/>}/>
        <Route path="/CommitteeScheduleEvent" element={<CommitteeScheduleEvent />} />
        <Route path="/CommitteeViewScheduledEvent" element={<CommitteeViewScheduledEvent />} />
        <Route path="/CommitteeUpdateEvent/:eventId" element={<CommitteeUpdateEvent />} />
        <Route path="/CommitteeViewAllScheduledEvent" element={<CommitteeViewAllScheduledEvent/>}/>

        <Route path="/CommitteeViewAllResident" element={<CommitteeViewAllResident />} />
        <Route path="/CommitteeViewAllBill" element={<CommitteeViewAllBill />} />
        <Route path="/CommitteeMakeBill/:rId" element={<CommitteeMakeBill />} />
        <Route path="/CommitteeUpdateBill/:billId" element={<CommitteeUpdateBill/>}/>
     


        


        <Route path="/Logout" element={<Logout/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
