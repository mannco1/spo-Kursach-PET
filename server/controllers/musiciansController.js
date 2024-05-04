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

    async update(req, res) {
        const { id } = req.params;
        const { name } = req.body;
        const {insrtrument} = req.boy;
        const {role} = req.body;
        try {
            // Находим бренд по ID
            const musicians = await Musicians.findByPk(id);
            if (!musicians) {
           
                return next(ApiError.notFound('Музыкант не найден'));
            }
           
            musicians.name = name;
           
            await musicians.save();
            return res.json(musicians);
        } catch (err) {
            
            return next(ApiError.internal('Ошибка при обновлении музыканта'));
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
