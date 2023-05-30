const { Schema, Types } = require('mongoose');
const ReactionSchema = require('./ReactionSchema');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280,
            minlength: 1,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
        userName: {
            type: userSchema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        reactions: [ReactionSchema]
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
        id: false,
    }
);

thoughtSchema.virtual('formattedCreatedAt').get(function () {
    const formattedDate = this.createdAt.toLocaleString();
    return formattedDate;
});

thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

module.exports = thoughtSchema;
