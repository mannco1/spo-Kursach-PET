const { Composition } = require('../models/models');
const ApiError = require('../error/ApiError');

class CompositionController {
    async create(req, res, next) {
        const { title, composer } = req.body;
        try {
            const composition = await Composition.create({ title, composer });
            return res.json(composition);
        } catch (err) {
            return next(ApiError.internal('Ошибка при создании произведения'));
        }
    }

    async getAll(req, res, next) {
        try {
            const compositions = await Composition.findAll();
            return res.json(compositions);
        } catch (err) {
            return next(ApiError.internal('Ошибка при получении списка произведений'));
        }
    }

    async getOne(req, res, next) {
        const { id } = req.params;
        try {
            const composition = await Composition.findByPk(id);
            if (!composition) {
                return next(ApiError.notFound('Произведение не найдено'));
            }
            return res.json(composition);
        } catch (err) {
            return next(ApiError.internal('Ошибка при получении произведения'));
        }
    }

    async update(req, res, next) {
        const { id } = req.params;
        const { title, composer } = req.body;
        try {
            let composition = await Composition.findByPk(id);
            if (!composition) {
                return next(ApiError.notFound('Ансамбль не найден'));
            }
            
            // Обновляем поля ансамбля
            composition = await composition.update({ title, composer });
    
            // Возвращаем обновленный ансамбль
            return res.json(composition);  
        } catch (err) {
            return next(ApiError.internal('Ошибка при обновлении ансамбля'));
        }
    }

    async delete(req, res, next) {
        const { id } = req.params;
        try {
            await Composition.destroy({ where: { id } });
            return res.json({ message: 'Произведение успешно удалено' });
        } catch (err) {
            return next(ApiError.internal('Ошибка при удалении произведения'));
        }
    }
}

module.exports = new CompositionController();
