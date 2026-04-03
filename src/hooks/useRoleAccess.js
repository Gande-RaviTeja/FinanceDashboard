import { useDataContext } from '../context/DataContext';

export const useRoleAccess = () => {
  const { selectedRole } = useDataContext();

  return {
    role: selectedRole,
    isAdmin: selectedRole === 'Admin',
    isViewer: selectedRole === 'Viewer',
    canEdit: () => selectedRole === 'Admin',
    canAdd: () => selectedRole === 'Admin',
    canDelete: () => selectedRole === 'Admin',
  };
};
