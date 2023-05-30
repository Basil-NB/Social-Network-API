const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId(),
        },
        reactionBody: {
            type: String,
            required: true,
            maxlength: 280,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: function (value) {
                const formattedDate = value.toLocaleString();
                return formattedDate;
            },
        },
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
    }
);

module.exports = reactionSchema;