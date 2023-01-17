export interface ConfirmationAlertProps {
    close: () => void;
    itemName: string;
    text: string;
    confirmAction: () => void;
}