/**
 * 아래의 typescript 룰을 lint를 돌리게 되면 tsconfig.json 파일 등록이 요구되고 성능이 크게 떨어져
 * tsconfig.json을 요구하는 룰들을 off 처리 합니다.
 */
module.exports = {
  rules: {
    'require-await': 'error',
    'no-throw-literal': 'error',

    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/no-redundant-type-constituents': 'off',
    '@typescript-eslint/no-throw-literal': 'off',
    '@typescript-eslint/no-unnecessary-condition': 'off',
    '@typescript-eslint/no-unnecessary-qualifier': 'off',
    '@typescript-eslint/no-unnecessary-type-assertion': 'off',
    '@typescript-eslint/require-await': 'off',
  },
};
