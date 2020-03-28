const express = require('express');
const routes = express.Router();
const OngController = require('./controlles/OngController')
const ProfileController = require('./controlles/ProfileController')
const IncidentController = require('./controlles/IncidentController')
const SessionController = require('./controlles/SessionController')
const { celebrate, Joi , Segments} = require('celebrate');

routes.get('/ongs', OngController.index)

routes.post('/ongs', celebrate({
    [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().required().email(),
        whatsapp: Joi.string().required(),
        city: Joi.string().required(),
        uf: Joi.string().required().length(2)
    })
}),OngController.create);

routes.get('/incidents', celebrate({
    [Segments.QUERY]: Joi.object().keys({
        page: Joi.number()
    }),
}) ,IncidentController.index)

routes.post('/incidents',celebrate({
    [Segments.BODY]: Joi.object().keys({
        title: Joi.string().required(),
        description: Joi.string().required(),
        value: Joi.number().required()
    })
}), IncidentController.create);

routes.delete('/incidents/:id', celebrate({
    [Segments.PARAMS]: Joi.object().keys({
        id: Joi.string().required()
    }),
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}), IncidentController.delete);

routes.get('/profile', celebrate({
    [Segments.HEADERS]: Joi.object({
        authorization: Joi.string().required()
    }).unknown()
}) ,ProfileController.index);

routes.post('/sessions', celebrate({
    [Segments.BODY]: Joi.object().keys({
        id: Joi.string().required()
    })
}),SessionController.create);




module.exports = routes