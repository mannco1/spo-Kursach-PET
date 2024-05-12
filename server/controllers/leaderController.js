const { Leader } = require('../models/models');
const ApiError = require('../error/ApiError');

class LeaderController {
    async create(req, res, next) {
        const { name, ensemble_id } = req.body;
        try {
            const leader = await Leader.create({ name, ensemble_id });
            return res.json(leader);
        } catch (err) {
            return next(ApiError.internal('Ошибка при создании лидера'));
        }
    }

    async getAll(req, res, next) {
        try {
            const leaders = await Leader.findAll();
            return res.json(leaders);
        } catch (err) {
            return next(ApiError.internal('Ошибка при получении списка лидеров'));
        }
    }

    async getOne(req, res, next) {
        const { id } = req.params;
        try {
            const leader = await Leader.findByPk(id);
            if (!leader) {
                return next(ApiError.notFound('Лидер не найден'));
            }
            return res.json(leader);
        } catch (err) {
            return next(ApiError.internal('Ошибка при получении лидера'));
        }
    }

    async update(req, res, next) {
        const { id } = req.params;
        const { name, ensemble_id } = req.body;
        try {
            let leader = await Leader.findByPk(id);
            if (!leader) {
                return next(ApiError.notFound('Лидер не найден'));
            }
            
            // Обновляем поля лидера
            leader = await leader.update({ name, ensemble_id });
    
            // Возвращаем обновленного лидера
            return res.json(leader);  
        } catch (err) {
            return next(ApiError.internal('Ошибка при обновлении лидера'));
        }
    }

    async delete(req, res, next) {
        const { id } = req.params;
        try {
            await Leader.destroy({ where: { id } });
            return res.json({ message: 'Лидер успешно удален' });
        } catch (err) {
            return next(ApiError.internal('Ошибка при удалении лидера'));
        }
    }
}

module.exports = new LeaderController();
