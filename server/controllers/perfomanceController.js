const { Perfomance } = require('../models/models');
const ApiError = require('../error/ApiError');

class PerfomanceController {
    async create(req, res, next) {
        const { title, composer } = req.body;
        try {
            const perfomance = await Perfomance.create({ title, composer });
            return res.json(perfomance);
        } catch (err) {
            return next(ApiError.internal('Ошибка при создании выступления'));
        }
    }

    async getAll(req, res, next) {
        try {
            const perfomances = await Perfomance.findAll();
            return res.json(perfomances);
        } catch (err) {
            return next(ApiError.internal('Ошибка при получении списка выступлений'));
        }
    }

    async getOne(req, res, next) {
        const { id } = req.params;
        try {
            const perfomance = await Perfomance.findByPk(id);
            if (!perfomance) {
                return next(ApiError.notFound('Выступление не найдено'));
            }
            return res.json(perfomance);
        } catch (err) {
            return next(ApiError.internal('Ошибка при получении выступления'));
        }
    }

    async update(req, res, next) {
        const { id } = req.params;
        const { title, composer } = req.body;
        try {
            let perfomance = await Perfomance.findByPk(id);
            if (!perfomance) {
                return next(ApiError.notFound('Выступление не найдено'));
            }
            
            // Обновляем поля выступления
            perfomance = await perfomance.update({ title, composer });
    
            // Возвращаем обновленное выступление
            return res.json(perfomance);  
        } catch (err) {
            return next(ApiError.internal('Ошибка при обновлении выступления'));
        }
    }

    async delete(req, res, next) {
        const { id } = req.params;
        try {
            await Perfomance.destroy({ where: { id } });
            return res.json({ message: 'Выступление успешно удалено' });
        } catch (err) {
            return next(ApiError.internal('Ошибка при удалении выступления'));
        }
    }
}

module.exports = new PerfomanceController();
