import { AppRouter } from '../../router/AppRouter';
import { MainSection } from '../../styled-components';

export const MainLayout = () => {
  return (
    <>
      <MainSection>
        <AppRouter />
      </MainSection>
    </>
  );
};
