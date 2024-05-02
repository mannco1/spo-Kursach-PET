const { Musicians } = require('../models/models');
const ApiError = require('../error/ApiError');

class MusiciansController {
    async create(req, res) {
        const { name } = req.body;
        const {insrtrument} = req.boy;
        const {role} = req.body;
        try {
            const musicians = await Musicians.create({ name });

                
            return res.json(musicians);
        } catch (err) {
            // Если произошла ошибка при создании бренда, возвращаем ошибку API
            return next(ApiError.internal('Ошибка при создании музыканта'));
        }
    }

    async getAll(req, res) {
        try {
            const musicians = await Musicians.findAll();
            
            return res.json(musicians);
        } catch (err) {
            // Если произошла ошибка при получении списка брендов, возвращаем ошибку API
            return next(ApiError.internal('Ошибка при получении списка музыкантов'));
        }
    }
    async getOne(req, res) {
        const {id} = req.params
        const musicians = await Musicians.findOne(
            {
                where: {id},
                include: [{model: MusiciansInfo, as: 'info'}]
            },
        )
        return res.json(musicians)
    }

    async update(req, res) {
        const { id } = req.params;
        const { name } = req.body;
        const {insrtrument} = req.boy;
        const {role} = req.body;
        try {
            // Находим бренд по ID
            const musicians = await Musicians.findByPk(id);
            if (!musicians) {
                // Если бренд не найден, возвращаем ошибку API
                return next(ApiError.notFound('Музыкант не найден'));
            }
            // Обновляем имя бренда
            musicians.name = name;
            // Сохраняем изменения в базе данных
            await musicians.save();
            return res.json(musicians);
        } catch (err) {
            // Если произошла ошибка при обновлении бренда, возвращаем ошибку API
            return next(ApiError.internal('Ошибка при обновлении музыканта'));
        }
    }

    async delete(req, res) {
        const { id } = req.params;
        try {
            // Находим бренд по ID и удаляем его из базы данных
            await Musicians.destroy({ where: { id } });
            return res.json({ message: 'музыкант успешно удален' });
        } catch (err) {
            // Если произошла ошибка при удалении бренда, возвращаем ошибку API
            return next(ApiError.internal('Ошибка при удалении музыканта'));
        }
    }
}

module.exports = new MusiciansController();
