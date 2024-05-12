const { Matrix } = require('../models/models');
const ApiError = require('../error/ApiError');

class MatrixController {
    async create(req, res, next) {
        const { company_id, record_data, performance_id } = req.body;
        try {
            const matrix = await Matrix.create({ company_id, record_data, performance_id });
            return res.json(matrix);
        } catch (err) {
            return next(ApiError.internal('Ошибка при создании матрицы'));
        }
    }

    async getAll(req, res, next) {
        try {
            const matrices = await Matrix.findAll();
            return res.json(matrices);
        } catch (err) {
            return next(ApiError.internal('Ошибка при получении списка матриц'));
        }
    }

    async getOne(req, res, next) {
        const { id } = req.params;
        try {
            const matrix = await Matrix.findByPk(id);
            if (!matrix) {
                return next(ApiError.notFound('Матрица не найдена'));
            }
            return res.json(matrix);
        } catch (err) {
            return next(ApiError.internal('Ошибка при получении матрицы'));
        }
    }

    async update(req, res, next) {
        const { id } = req.params;
        const { company_id, record_data, performance_id } = req.body;
        try {
            let matrix = await Matrix.findByPk(id);
            if (!matrix) {
                return next(ApiError.notFound('Матрица не найдена'));
            }
            
            // Обновляем поля матрицы
            matrix = await matrix.update({ company_id, record_data, performance_id });
    
            // Возвращаем обновленную матрицу
            return res.json(matrix);  
        } catch (err) {
            return next(ApiError.internal('Ошибка при обновлении матрицы'));
        }
    }

    async delete(req, res, next) {
        const { id } = req.params;
        try {
            await Matrix.destroy({ where: { id } });
            return res.json({ message: 'Матрица успешно удалена' });
        } catch (err) {
            return next(ApiError.internal('Ошибка при удалении матрицы'));
        }
    }
}

module.exports = new MatrixController();
