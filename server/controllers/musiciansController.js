const { Musicians } = require('../models/models');
const ApiError = require('../error/ApiError');

class MusiciansController {
    async create(req, res) {
        const { name } = req.body;
        const {insrtrument} = req.body;
        const {role} = req.body;
        try {
            const musicians = await Musicians.create({ name,insrtrument,role });

                
            return res.json(musicians);
        } catch (err) {
            
            return next(ApiError.internal('Ошибка при создании музыканта'));
        }
    }

    async getAll(req, res) {
        try {
            const musicians = await Musicians.findAll();
            
            return res.json(musicians);
        } catch (err) {
            
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

    async update(req, res, next) {
        const { id } = req.params;
        const { name,insrtrument,role} = req.body;
        try {
            let musicians = await Musiciansusicians.findByPk(id);
            if (!musicians) {
                return next(ApiError.notFound('Ансамбль не найден'));
            }
            
            // Обновляем поля ансамбля
            musicians = await musicians.update({ name,insrtrument,role });
    
            // Возвращаем обновленный ансамбль
            return res.json(musicians);  
        } catch (err) {
            return next(ApiError.internal('Ошибка при обновлении ансамбля'));
        }
    }

    async delete(req, res) {
        const { id } = req.params;
        try {
            
            await Musicians.destroy({ where: { id } });
            return res.json({ message: 'музыкант успешно удален' });
        } catch (err) {
            
            return next(ApiError.internal('Ошибка при удалении музыканта'));
        }
    }
}

module.exports = new MusiciansController();
