import React from 'react'

export const RecentDesignInfo = () => {
    return (
        <div className='px-4'>
            <div className='border-2 border-dashed px-2 py-4 space-y-2 rounded-lg border-zinc-300 dark:border-neutral-700'>
                <h2
                    className='text-[13px] text-center font-medium dark:text-zinc-100'
                >
                    Recent Designs
                </h2>
                <p className='text-[13px] text-center font-medium dark:text-zinc-300'>
                    The latest designs you create or open will be shown here.
                </p>
            </div>
        </div>
    )
}
