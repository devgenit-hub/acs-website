import MainSection from '@/modules/registration/components/MainSection';
import RegistrationProcess from '@/modules/registration/components/RegistrationProcess';
import PaymentInfo from '../components/PaymentInfo';

export default function Registration() {
  return (
    <>
      <MainSection />
      <RegistrationProcess />
      <PaymentInfo />
    </>
  );
}
