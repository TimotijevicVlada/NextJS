export interface ConfirmationAlertProps {
    close: () => void;
    itemName: string | undefined;
    text: string;
    confirmAction: () => void;
}