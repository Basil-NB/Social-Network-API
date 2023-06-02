const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const User = require('./User')

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
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        reactions: [reactionSchema]
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

const Thought = model('Thought', thoughtSchema);
module.exports = Thought;
