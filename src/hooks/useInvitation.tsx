import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  deleteInvitation,
  getInvitation,
  getInvitations,
  postInvitation,
  updateInvitation,
} from '../services/invitationService';
import { InvitationDetiail } from '../types/invitationType';
import resetAllStores from '@/store/resetStore';
import { useNavigate } from 'react-router';

export const useGetInvitation = (id: number) => {
  let { data, isError } = useQuery<InvitationDetiail>({
    queryKey: ['invitations', id],
    queryFn: () => getInvitation(id),
  });
  return { invitations: data, error: isError };
};

export const useGetInvitations = () => {
  return useQuery({
    queryKey: ['invitations'],
    queryFn: () => getInvitations(),
  });
};

export const usePostInvitation = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (details: InvitationDetiail) => {
      return postInvitation(details);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['invitations'] });
      console.log('생성완료');
      navigate('/dashboard');
      resetAllStores();
    },
    onError: (err) => {
      console.log(err);
    },
  });
};

export const useUpdateInvitation = (id: number) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (details: InvitationDetiail) =>
      updateInvitation({ id, details }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['invitations'] });
      navigate('/dashboard');
      resetAllStores();
    },
  });
};

export const useDeleteInvitation = (id: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    onMutate: async (id) => {
      await queryClient.cancelQueries({ queryKey: ['invitations'] });
      const previousInvitations = queryClient.getQueryData(['invitations']);
      queryClient.setQueryData(['invitations'], (old: InvitationDetiail[]) =>
        old.filter((inv) => inv.id !== id),
      );
      return { previousInvitations };
    },
    mutationFn: () => deleteInvitation(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['invitations'] });
    },
  });
};
