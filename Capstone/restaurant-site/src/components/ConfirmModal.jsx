import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from "./ui/dialog";

export default function ConfirmModal({ open, onOpenChange, title, body, actions }) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="gg-modal">
                <DialogHeader>
                    <DialogTitle className="cinzel modal-title">{title}</DialogTitle>
                </DialogHeader>
                <div className="modal-body">{body}</div>
                {actions && (
                    <DialogFooter className="modal-footer">
                        {actions}
                    </DialogFooter>
                )}
            </DialogContent>
        </Dialog>
    );
}
