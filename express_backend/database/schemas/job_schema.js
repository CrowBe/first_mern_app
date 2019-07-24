const { Schema } = require("mongoose");
const itemSchema = require("./")

const JobSchema = new Schema({
    status: {
        type: String,
        default: 'Enquiry'
    },
    enquiryForm: String,
    enquiryFormSent: {
        type: Boolean,
        default: false
    },
    siteVisitDate: Date,
    dateVisited: Date,
    siteForm: String,
    siteDrawing: String,
    fullQuote: String,
    clientQuote: String,
    quoteSentDate: Date,
    followUpDate: Date,
    welcomeLetter: String,
    welcomeContract: String,
    welcomeInvoice: String,
    welcomePackageSent: {
        type: Boolean,
        default: false
    },
    siteBrief: String,
    customerWalkthroughDate: Date,
    customerWalkthroughCompleted: {
        type: Boolean,
        default: false
    },
    foremanWalkthroughDate: Date,
    foremanWalkthroughCompleted: {
        type: Boolean,
        default: false
    },
    siteSafetyChecklist: String,
    commencementDate: Date,
    siteFile: String,
    jobItems: {
        type: [itemSchema]
    },
    itemsToBeCompleted: Number,
    allItemsCompleted: {
        type: Boolean,
        default: false
    },
    allItemsPaid: {
        type: Boolean,
        default: false        
    },
    handoverAppointment: Date,
    handoverIssues: String,
    handoverCompleted: Date,
    customerFeedbackRequested: String
});

module.exports = JobSchema;