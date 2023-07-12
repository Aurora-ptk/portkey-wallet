import { MiscState } from '../../../test/data/miscState';
import { renderHookWithProvider } from '../../../test/utils/render';
import { setupStore } from '../../../test/utils/setup';
import { useMisc } from './misc';

describe('useMisc', () => {
  test('get misc data successfully', () => {
    const { result } = renderHookWithProvider(useMisc, setupStore(MiscState));

    expect(result.current).toHaveProperty('phoneCountryCodeListChainMap');
    expect(result.current).toHaveProperty('defaultPhoneCountryCode');
    expect(result.current.defaultPhoneCountryCode).toEqual(MiscState.misc.defaultPhoneCountryCode);
  });
  test('failed to get misc data', () => {
    const { result } = renderHookWithProvider(useMisc, setupStore({}));

    expect(result.current).toBeUndefined();
  });
});
