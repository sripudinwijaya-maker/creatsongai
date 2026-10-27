export type WorkflowType = 'generate' | 'cover' | 'addVocals' | 'extend' | 'mashup' | 'sampleToSong' | 'outro' | 'lyrics';
export type ModelType = 'V6' | 'V6_WILD' | 'V6_MINI';
export type ThemeType = 'neon' | 'sunset' | 'terminal' | 'ocean' | 'studio';
export type TabView = 'home' | 'generate' | 'profile';
export type TaskState = 'idle' | 'waiting' | 'queuing' | 'generating' | 'success' | 'fail';
export interface TaskResult { taskId: string; state: TaskState; stateText: string; message: string; isError?: boolean; audioUrls: string[]; coverUrls: string[]; costTime?: number; creditsConsumed?: number; title: string; workflow: WorkflowType; model?: ModelType; style?: string; createdAt: number; }
export interface FormInputs { workflow: WorkflowType; model: ModelType; uploadUrl: string; uploadedFileName?: string; uploadedFileSize?: number; title: string; style: string; duration: number; continueAt: number; instrumental: boolean; lyrics: string; negativeTags: string; vocalGender: 'f' | 'm'; variety: string; styleWeight: number; weirdnessConstraint: number; audioWeight: number; remixGenre?: string; outroType?: string; }
export interface ModelInfo { id: ModelType; name: string; badge: string; description: string; }
export interface StudioWorkflowInfo { id: WorkflowType; name: string; iconName: string; badge: string; category: 'Creation' | 'Vocal' | 'Remix & Extend' | 'AI Tool'; description: string; }