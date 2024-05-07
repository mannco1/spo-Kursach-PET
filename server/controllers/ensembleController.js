const { Ensemble } = require('../models/models');
const ApiError = require('../error/ApiError');

class EnsembleController {
    async create(req, res, next) {
        const { name, type } = req.body;
        try {
            const ensemble = await Ensemble.create({ name, type });
            return res.json(ensemble);
        } catch (err) {
            return next(ApiError.internal('Ошибка при создании ансамбля'));
        }
    }
    
    async getAll(req, res, next) {
        try {
            const ensembles = await Ensemble.findAll();
            return res.json(ensembles);
        } catch (err) {
            return next(ApiError.internal('Ошибка при получении списка ансамблей'));
        }
    }

    async getOne(req, res, next) {
        const { id } = req.params;
        try {
            const ensemble = await Ensemble.findByPk(id);
            if (!ensemble) {
                return next(ApiError.notFound('Ансамбль не найден'));
            }
            return res.json(ensemble);
        } catch (err) {
            return next(ApiError.internal('Ошибка при получении ансамбля'));
        }
    }

    async update(req, res, next) {
        const { id } = req.params;
        const { name, type } = req.body;
        try {
            let ensemble = await Ensemble.findByPk(id);
            if (!ensemble) {
                return next(ApiError.notFound('Ансамбль не найден'));
            }
            
            // Обновляем поля ансамбля
            ensemble = await ensemble.update({ name, type });
    
            // Возвращаем обновленный ансамбль
            return res.json(ensemble);  
        } catch (err) {
            return next(ApiError.internal('Ошибка при обновлении ансамбля'));
        }
    }

    async delete(req, res, next) {
        const { id } = req.params;
        try {
            await Ensemble.destroy({ where: { id } });
            return res.json({ message: 'Ансамбль успешно удален' });
        } catch (err) {
            return next(ApiError.internal('Ошибка при удалении ансамбля'));
        }
    }
}

module.exports = new EnsembleController();