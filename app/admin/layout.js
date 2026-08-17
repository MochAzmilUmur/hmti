import { getSession } from '../../lib/session';
import AdminShell from './AdminShell';

export default async function AdminLayout({ children }) {
  const session = await getSession();
  return <AdminShell session={session}>{children}</AdminShell>;
}
