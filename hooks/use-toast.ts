'use client';

import * as React from 'react';
import { toast as sonnerToast } from 'sonner';

const TOAST_LIMIT = 3;

type ToasterToast = {
  id: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const actionTypes = {
  ADD_TOAST: 'ADD_TOAST',
  UPDATE_TOAST: 'UPDATE_TOAST',
  DISMISS_TOAST: 'DISMISS_TOAST',
  REMOVE_TOAST: 'REMOVE_TOAST',
} as const;

type ActionType = typeof actionTypes;

type Action =
  | { type: ActionType['ADD_TOAST']; toast: ToasterToast }
  | { type: ActionType['UPDATE_TOAST']; toast: Partial<ToasterToast> }
  | { type: ActionType['DISMISS_TOAST']; toastId?: string }
  | { type: ActionType['REMOVE_TOAST']; toastId?: string };

interface State {
  toasts: ToasterToast[];
}

function toastReducer(state: State, action: Action): State {
  switch (action.type) {
    case 'ADD_TOAST':
      return { toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT) };
    case 'UPDATE_TOAST':
      return {
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      };
    case 'DISMISS_TOAST':
      return {
        toasts: state.toasts.filter((t) => t.id !== action.toastId),
      };
    case 'REMOVE_TOAST':
      return { toasts: [] };
    default:
      return state;
  }
}

export function useToast() {
  const [state, dispatch] = React.useReducer(toastReducer, { toasts: [] });

  function toast(p0: string, { title, description }: Omit<ToasterToast, 'id'>) {
    const id = crypto.randomUUID();

    sonnerToast(title as string, { description: description as string });

    dispatch({ type: 'ADD_TOAST', toast: { id, title, description } });

    return {
      id,
      dismiss: () => dispatch({ type: 'DISMISS_TOAST', toastId: id }),
      update: (newProps: Partial<ToasterToast>) =>
        dispatch({ type: 'UPDATE_TOAST', toast: { id, ...newProps } }),
    };
  }

  function dismiss(toastId?: string) {
    dispatch({ type: 'DISMISS_TOAST', toastId });
  }

  return { ...state, toast, dismiss };
}
