const Document = require("./document.model");
const Event = require("./event.model");
const Form = require("./form.model");
const FundPaymentHistory = require("./fundPaymentHistory.model");
const LoginCredential = require("./loginCredentials.model");
const PartyProfileStatus = require("./partyProfileStatus.model");
const Profile = require("./profile.model");
const Role = require("./role.model");

/*
    MARK: 
    TODO: // Setup Relation between model or tables
    ! SAMPLES:
    *    User.hasMany(Post, { foreignKey: 'userId' });
    *    Post.belongsTo(User, { foreignKey: 'userId' });
    *    Post.hasMany(Comment, { foreignKey: 'postId' });
    *    Comment.belongsTo(Post, { foreignKey: 'postId' });
 */

// Export
module.exports = {
    Document,
    Event,
    Form,
    FundPaymentHistory,
    LoginCredential,
    PartyProfileStatus,
    Profile,
    Role,
};
