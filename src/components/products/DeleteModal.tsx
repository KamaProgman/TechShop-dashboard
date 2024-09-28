import { Dialog, DialogContent, DialogFooter, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Button } from '../ui/button'
import { Trash } from 'lucide-react'
import { useEffect, useState } from 'react'
import { IdType } from '../../types'
import { AxiosPromise } from 'axios'
import { useMutation, useQueryClient } from '@tanstack/react-query'

interface props {
  id: IdType
  deleteFunction: (id: IdType) => AxiosPromise
  queryKey: string
}

const DeleteModal = ({ id, deleteFunction, queryKey }: props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDeleteEnabled, setIsDeleteEnabled] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const queryClient = useQueryClient()

  const deleteMutation = useMutation({
    mutationFn: () => deleteFunction(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [queryKey] })
      setIsOpen(false)
    },
    onError: () => {
      console.error("Failed to delete the product");
    }
  })

  const handleDelete = () => {
    deleteMutation.mutate()
  }

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isOpen) {
      setIsDeleteEnabled(false);
      setCountdown(3);

      timer = setInterval(() => {
        setCountdown((prev) => {
          if (prev === 1) {
            setIsDeleteEnabled(true);
            clearInterval(timer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      setIsDeleteEnabled(false);
    }

    return () => clearInterval(timer);
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="text-destructive bg-transparent border-0"
        >
          <Trash className="w-4 h-4" />
          <span className="sr-only">Delete</span>
        </Button>
      </DialogTrigger>

      <DialogContent >
        <DialogTitle className="text-lg font-medium">Confirm Delete</DialogTitle>
        <p>Are you sure you want to delete this product?</p>
        <DialogFooter>
          <Button variant="outline" onClick={() => setIsOpen(false)} >
            Cancel
          </Button>
          <Button
            variant="default"
            onClick={handleDelete}
            disabled={!isDeleteEnabled}>
            {isDeleteEnabled ? "Delete" : `Delete in ${countdown} sec`}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default DeleteModal