import rules from '../helpers/validationRules';
import validationErrors from '../helpers/validationErrors';
import ValidationHelper from '../helpers/validationHelper';

/**
 *    @fileOverview Class to validate user input for order
 *    @class ValidateMeals
 *    @exports ValidateMeals
 */

class ValidateMeals {
  /**
   * validate meals input
   * @param {Object} request
   * @param {Object} response
   * @callback {Function} next
   * @return {Object} json
   */
  static validateMeal(request, response, next) {
    const {
      name,
      description,
      price,
    } = request.body;
    const errors = {};
    if (!name || !rules.empty.test(name)) errors.mealRequired = validationErrors.mealRequired;
    if (!rules.validMeal.test(name)) errors.validMeal = validationErrors.validMeal;
    if (!rules.mealLength.test(name)) errors.mealLength = validationErrors.mealLength;
    if (!description || !rules.empty.test(description)) {
      errors.descRequired = validationErrors.descRequired;
    }
    if (!rules.validDesc.test(description)) errors.validDesc = validationErrors.validDesc;
    if (!rules.descLength.test(description)) errors.descLength = validationErrors.descLength;
    if (!rules.empty.test(price)) errors.priceRequired = validationErrors.priceRequired;
    if (!rules.validId.test(price) || price < 1) {
      errors.validPrice = validationErrors.validPrice;
    }
    ValidationHelper.checkValidationErrors(response, errors, next);
  }
}

export default ValidateMeals;
