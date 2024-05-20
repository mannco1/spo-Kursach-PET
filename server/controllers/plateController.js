const { Plate } = require('../models/models');
const ApiError = require('../error/ApiError');

class PlateController {
    async create(req, res, next) {
        const { matrix_id, performance_id, retail_price, plate_output_data, available_instock } = req.body;
        try {
            const plate = await Plate.create({ matrix_id, performance_id, retail_price, plate_output_data, available_instock });
            return res.json(plate);
        } catch (err) {
            return next(ApiError.internal('Ошибка при создании пластинки'));
        }
    }
 
    async getAll(req, res, next) {
        try {
            const plates = await Plate.findAll();
            return res.json(plates);
        } catch (err) {
            return next(ApiError.internal('Ошибка при получении списка пластинок'));
        }
    }

    async getOne(req, res, next) {
        const { id } = req.params;
        try {
            const plate = await Plate.findByPk(id);
            if (!plate) {
                return next(ApiError.notFound('Пластинка не найдена'));
            }
            return res.json(plate);
        } catch (err) {
            return next(ApiError.internal('Ошибка при получении пластинки'));
        }
    }

    async update(req, res, next) {
        const { id } = req.params;
        const { matrix_id, performance_id, retail_price, plate_output_data, available_instock } = req.body;
        try {
            let plate = await Plate.findByPk(id);
            if (!plate) {
                return next(ApiError.notFound('Пластинка не найдена'));
            }
            
            // Обновляем поля пластинки
            plate = await plate.update({ matrix_id, performance_id, retail_price, plate_output_data, available_instock });
    
            // Возвращаем обновленную пластинку
            return res.json(plate);  
        } catch (err) {
            return next(ApiError.internal('Ошибка при обновлении пластинки'));
        }
    }

    async delete(req, res, next) {
        const { id } = req.params;
        try {
            await Plate.destroy({ where: { id } });
            return res.json({ message: 'Пластинка успешно удалена' });
        } catch (err) {
            return next(ApiError.internal('Ошибка при удалении пластинки'));
        }
    }
}

module.exports = new PlateController();
