/**
 * Заглавные буквы (глобальный поиск)
 */
export const UPPER_LETTER_REGEXP = /[A-Z]/g;

/**
 * Поиск snake_case (глобальный поиск)
 */
export const SNAKE_CASE_REGEXP = /_([a-z])/g;

/**
 * Запрещенные символы для текстов
 */
export const UNALLOWED_TEXT_CHARACTERS_REGEXP = /[<>&%]/g;

/**
 * Запрещенные символы для логина
 */
export const UNALLOWED_LOGIN_CHARACTERS_REGEXP = /[\W-]/g;

/**
 * Только цифры
 */
export const ONLY_DIGITS_REGEXP = /^\d+$/;

/**
 * Одна заглавная буква
 */
export const ONE_CAPITAL_LETTER_REGEXP = /[A-Z]/;

/**
 * Одна цифра
 */
export const ONE_DIGIT_REGEXP = /[0-9]/;

/**
 * Символы, не являющиеся латиницей, кириллицей или дефисом
 */
export const NOT_LETTER_OR_HYPHEN_REGEXP = /[^a-zA-Zа-яА-ЯёЁ-]/;

/**
 * Первая буква заглавная (латиница/ кириооица)
 */
export const FIRST_LETTER_CAPITAL_REGEXP = /^[A-ZА-ЯЁ]/;

/**
 * Недопустимые символы для почту
 */
export const UNALLOWED_EMAIL_CHARS_REGEXP = /[^\w@.!#$%&'*+\-/=?^{|}~]/;

/**
 * Проверка наличия @ и точки с буквами между ними
 * @ не на первом месте, после @ буквы, затем точка
 */
export const HAS_AT_AND_DOT_WITH_LETTERS_REGEXP = /.+@[a-zA-Z]+\.[a-zA-Z]+/;

/**
 * Проверка на символы, которые не являются цифрами или знаком + (для телефона)
 */
export const UNALLOWED_PHONE_CHARS_REGEXP = /[^\d+]/;

/**
 * Два и более пробела
 */
export const MORE_THAN_ONE_SPACE_REG_EXP = /\s{2,}/g;

/**
 * Телефон может начинаться с плюса, затем только цифры
 */
export const PHONE_REGEXP = /^\+?\d+$/;
